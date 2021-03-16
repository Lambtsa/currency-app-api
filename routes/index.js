const express = require('express');
// const repository = require('../db/repository');
const { sendOwnerEmail } = require('../modules/emails');
const Email = require('../modules/schemas/emailsSchema');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
});

router.post('/addEmail', async (req, res, next) => {
  try {
    const { email } = req.body;
    const newEmail = await new Email({
      email,
      subscriber: true,
    }).save();
    sendOwnerEmail(email);
    res
      .status(201)
      .json(newEmail);
  } catch (err) {
    const error = err;
    error.statusCode = 400;
    next(error);
  }
});

// router.get('/currencies', (req, res, next) => {
//   try {
//     repository.getAllCurrencies()
//       .then(data => {
//         res
//           .status(200)
//           .json(data.rows);
//       });
//   } catch (err) {
//     // Need to handle this better
//     next(err);
//   }
// });

module.exports = router;
