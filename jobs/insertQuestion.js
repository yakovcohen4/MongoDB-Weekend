const question = require('../models/question');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://*****:*****@cluster.ck0tp.mongodb.net/mongo_practice?retryWrites=true&w=majority'
  )
  .then(result => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

const questionsArray = [
  {
    title: ' What is nodejs',
    correctAnswer: ' A JavaScript runtime environment',
    answers: [
      'A JavaScript runtime environment',
      'A c# extension',
      "Irish children's story",
    ],
    difficulty: 4,
  },
  {
    title: 'What is recursion in a programming language',
    correctAnswer:
      'A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result .',
    answers: [
      'When a senior tells you to rewrite your function',
      'A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result',
      'When you get up in the morning and miraculously your bug is fixed',
    ],
    difficulty: 3,
  },
  {
    title: 'What is DOM',
    correctAnswer:
      ' Document Object Model is a programming interface for HTML and XML documents',
    answers: [
      'Done On Morning A technique to a healthy work life ',
      'Document Object Maintain is a design pattern to save your front the correct way',
      'Document Object Model is a programming interface for HTML and XML documents',
    ],
    difficulty: 7,
  },
  {
    title: 'What is Object Destructuring',
    correctAnswer: 'A new way to extract elements from an object or an array.',
    answers: [
      'A new way to extract elements from an object or an array',
      'A Memory Management feature that helps the garbage collector in js',
      'Document Object Model is a programming interface for HTML and XML documents',
    ],
    difficulty: 8,
  },
];

question
  .insertMany(questionsArray)
  .then(() => {
    console.log('insert');
  })
  .catch(error => console.log(error));
