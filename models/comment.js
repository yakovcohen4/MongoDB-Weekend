const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

module.exports = mongoose.model('User', CommentsSchema);
