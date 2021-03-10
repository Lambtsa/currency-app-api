const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://lambtsa.github.io',
}));

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'You are at the root' });
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
