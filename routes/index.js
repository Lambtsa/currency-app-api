const express = require('express');
const {
  fetchCrypto,
  fetchCurrencies,
  createCryptoRatesObj,
  createCurrencyRatesObj,
} = require('../helpers');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
});

router.get('/crypto', async (req, res, next) => {
  try {
    const data = await fetchCrypto();
    const crypto = createCryptoRatesObj(data);
    res
      .status(200)
      .json(crypto);
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

router.get('/currencies', async (req, res, next) => {
  try {
    const data = await fetchCurrencies();
    const currencies = createCurrencyRatesObj(data);
    res
      .status(200)
      .json(currencies);
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

module.exports = router;
