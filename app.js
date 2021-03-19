const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
const routes = require('./routes');
const { sendMonthlyEmail } = require('./modules/emails');
const Email = require('./modules/schemas/emailsSchema');
const CurrencyDB = require('./modules/schemas/currencySchema');
const { getNewRates } = require('./modules/helpers');

const app = express();

app.use(express.json());
app.use(express.static('public'));

const origin = process.env.NODE_ENV === 'production'
  ? 'https://lambtsa.github.io'
  : 'http://localhost:3000';

app.use(cors({
  origin,
}));

app.use('/', routes);

// (async () => {
//   try {
//     const currencies = await getNewRates();
//     currencies.forEach(currency => {
//       new CurrencyDB({
//         initials: currency.initials,
//         name: currency.name,
//         rate: currency.rate,
//         rateDelta: 0,
//         logo: currency.logo,
//       }).save();
//     });
//   } catch (err) {
//     console.log(err);
//   }
// })();

cron.schedule('44 */1 * * *', async () => {
  try {
    const updatedCurrencies = await getNewRates();
    updatedCurrencies.forEach(async currency => {
      const oldCurrency = await CurrencyDB.find({ initials: currency.initials });
      const delta = Math
        .round(((currency.rate - oldCurrency[0].rate)
        / oldCurrency[0].rate) * (10 ** 6)) / (10 ** 4);
      await CurrencyDB.findOneAndUpdate(
        { initials: currency.initials },
        { rate: currency.rate, rateDelta: delta },
      );
    });
  } catch (err) {
    console.log(err);
  }
});

cron.schedule('0 0 1 * *', async () => {
  try {
    const emailAddresses = await Email.find();
    /* eslint-disable-next-line */
    for (const emailObj of emailAddresses) {
      sendMonthlyEmail(emailObj.email);
    }
  } catch (err) {
    console.log(err);
  }
});

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.statusCode = 404;
  next(error);
});

// eslint-disable-next-line
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const name = err.name || 'Error';
  res
    .status(statusCode)
    .json({ name, message: err.message });
});

module.exports = { app };
