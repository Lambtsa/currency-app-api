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

router.post('/addEmail', (req, res) => {
  try {
    const emailFilePath = './data/emails/emails.json';
    const emails = JSON.parse(fs.readFileSync(emailFilePath));
    const filteredEmails = emails.filter(e => e !== req.body.email);
    const newEmails = [...filteredEmails, req.body.email];
    fs.writeFile(emailFilePath, JSON.stringify(newEmails), err => {
      if (err) {
        console.log(err);
      }
      console.log('email file updated');
    });
    res
      .json({ message: 'Congratulations' });
  } catch (err) {
    res
      .status(400)
      .json({ message: 'This email is not correct' });
  }
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
