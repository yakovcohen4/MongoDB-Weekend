const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

module.exports = mongoose.model('Posts', PostsSchema);
