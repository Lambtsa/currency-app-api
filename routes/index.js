const express = require('express');
const currencies = process.env.NODE_ENV === 'production'
  ? require('../data/data/currencies.json')
  : require('../data/mockData/currencies.json');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
});

router.get('/currencies', async (req, res, next) => {
  try {
    res
      .status(200)
      .json(currencies);
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

module.exports = router;
