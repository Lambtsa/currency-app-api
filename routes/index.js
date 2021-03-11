const express = require('express');
const currencyData = process.env.NODE_ENV === 'production'
  ? require('../data/data/data.json')
  : require('../data/mockData/data.json');

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
      .json(currencyData);
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

module.exports = router;
