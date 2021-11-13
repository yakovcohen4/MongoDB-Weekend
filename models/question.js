const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  answers: { type: [String], required: true },
  difficulty: { type: Number, required: true },
});

module.exports = mongoose.model('Question', QuestionSchema);
