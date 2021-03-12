const fs = require('fs');
const express = require('express');

const currenciesPath = process.env.NODE_ENV === 'production'
  ? './data/data/currencies.json'
  : './data/mockData/currencies.json';

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
});

router.get('/currencies', async (req, res, next) => {
  try {
    const currencies = JSON.parse(fs.readFileSync(currenciesPath));
    res
      .status(200)
      .json(currencies);
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

module.exports = router;
