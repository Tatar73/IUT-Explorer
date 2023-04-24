const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: {
    type: ObjectId,
  },
  question: {
    type: String,
    required: true
  },
  reponse: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
