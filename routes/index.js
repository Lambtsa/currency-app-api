const express = require('express');
const { currencies } = require('../helpers');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
});

router.get('/currencies', async (req, res, next) => {
  try {
    const allCurrencies = await currencies();
    res
      .status(200)
      .json(allCurrencies);
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

module.exports = router;
