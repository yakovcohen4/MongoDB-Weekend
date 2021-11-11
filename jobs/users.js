const Students = require('../models/student');
const mongoose = require('mongoose');
mongoose
  .connect(`mongodb+srv://********:********@cluster.ck0tp.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
  .then(result => {
    console.log('connected to MongoDB job');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });
//
const postsData = [
  {
    username: 'GoodGuyGreg',
    title: 'Passes out at party',
    body: 'Wakes up early and cleans house',
  },
  {
    username: 'GoodGuyGreg',
    title: 'Steals your identity',
    body: 'Raises your credit score',
  },
  {
    username: 'GoodGuyGreg',
    title: 'Reports a bug in your code',
    body: 'Sends you a Pull Request',
  },
  {
    username: 'ScumbagSteve',
    title: 'Borrows something',
    body: 'Sells it',
  },
  {
    username: 'ScumbagSteve',
    title: 'Borrows everything',
    body: 'The end',
  },
  {
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Sets to private',
  },
];
Students.insertMany(postsData)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
