const mongoose = require('mongoose');

const emailsSchema = new mongoose.Schema({
  email: String,
  subscriber: Boolean,
});

module.exports = mongoose.model('emails', emailsSchema);
