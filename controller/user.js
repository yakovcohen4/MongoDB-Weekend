const Question = require('../models/question.js');

exports.listAllquestion = async (req, res, next) => {
  try {
    const questionsList = await Question.find({});
    res.status(200).send(questionsList);
    if (questionsList.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};
//POST /create - to create a question
exports.addNewQuestion = async (req, res, next) => {
  try {
    let { title, correctAnswer, answers, difficulty } = req.body;

    const newQuestion = await Question.create({
      title: title,
      correctAnswer: correctAnswer,
      answers: answers,
      difficulty: difficulty,
    });
    res.status(200).json(newQuestion);
  } catch (error) {
    next(error);
  }
};

exports.updateQuestion = async (req, res, next) => {
  try {
    let { question } = req.body;
    let { id } = req.params;
    await Question.updateOne({ id: id }, { title: question });
    res.status(200).json('update');
  } catch (error) {
    next(error);
  }
};

//DELETE /remove/:id - to delete a question by its id

exports.deleteQuestion = async (req, res, next) => {
  try {
    let { id } = req.params;
    const removedOne = await Question.findOneAndRemove({ _id: id });
    res.status(200).send(removedOne);
  } catch (error) {
    next(error);
  }
};

exports.listAllquestionByDifficulty = async (req, res, next) => {
  try {
    const { difficulty } = req.params;
    const questionsList = await Question.find({
      $or: [{ difficulty: difficulty }, { difficulty: { $gt: difficulty } }],
    });
    res.status(200).send(questionsList);
    if (questionsList.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};
//put all your user functions here :
