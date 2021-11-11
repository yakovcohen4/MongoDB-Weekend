const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  birth: { type: Date, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  courses: [{ type: String, required: true }],
});

module.exports = mongoose.model('Student', StudentSchema);
