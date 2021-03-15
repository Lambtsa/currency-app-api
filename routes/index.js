const express = require('express');
const repository = require('../db/repository');
const { sendOwnerEmail } = require('../emails');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
});

router.post('/addEmail', (req, res, next) => {
  const { email } = req.body;
  repository.addEmail(email)
    .then(() => {
      sendOwnerEmail(email)
      res
        .status(204)
        .send();
    })
    .catch(err => {
      const error = err;
      error.statusCode = 400;
      next(error);
    });
});

router.get('/currencies', (req, res, next) => {
  try {
    repository.getAllCurrencies()
      .then(data => {
        res
          .status(200)
          .json(data.rows);
      });
  } catch (err) {
    // Need to handle this better
    next(err);
  }
});

module.exports = router;
