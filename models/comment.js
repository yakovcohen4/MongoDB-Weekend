const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  post: { type: Object, required: true },
});

module.exports = mongoose.model('User', CommentsSchema);
