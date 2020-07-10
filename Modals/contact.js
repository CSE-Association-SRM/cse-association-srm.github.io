const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', ContactSchema);
