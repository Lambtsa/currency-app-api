require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { currencies } = require('./helpers');

const app = express();

app.use(express.static('public'));

currencies();

setInterval(() => {
  currencies();
}, 1000 * 60 * 60);

const origin = process.env.NODE_ENV === 'production'
  ? 'https://lambtsa.github.io'
  : 'http://localhost:3000';

app.use(cors({
  origin,
}));

app.use('/', routes);

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
