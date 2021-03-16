const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  initials: String,
  name: String,
  rate: Number,
  rateDelta: Number,
  logo: String,
});

module.exports = mongoose.model('currencies', currencySchema);
