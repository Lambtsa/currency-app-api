const fs = require('fs');
require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
const { getCurrencies } = require('./helpers');
const routes = require('./routes');
const { sendEmails } = require('./helpers/sendEmails');

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

(async () => {
  try {
    await getCurrencies();
  } catch (err) {
    console.log(err);
  }
})();

cron.schedule('0 */1 * * *', async () => {
  try {
    await getCurrencies();
    const emailsArray = JSON.parse(fs.readFileSync('./data/emails/emails.json'));
    sendEmails(emailsArray);
  } catch (err) {
    console.log(err);
  }
});

cron.schedule('0 0 1 * *', async () => {
  try {
    const emailsArray = JSON.parse(fs.readFileSync('./data/emails/emails.json'));
    sendEmails(emailsArray);
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
