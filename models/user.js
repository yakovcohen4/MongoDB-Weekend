const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  post: { type: Object, required: true },
});

module.exports = mongoose.model('User', UserSchema);
