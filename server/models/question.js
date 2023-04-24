const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
