const Students = require('../models/user');
const mongoose = require('mongoose');
mongoose
  .connect(`mongodb+srv://********:*********@cluster.ck0tp.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
  .then(result => {
    console.log('connected to MongoDB job');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });
//
const usersCollection = [
  {
    username: 'GoodGuyGreg',
    first_name: 'Good Guy',
    last_name: 'Greg',
  },
  {
    username: 'ScumbagSteve',
    first_name: 'Scumbag',
    last_name: 'Steve',
  },
];

Students.insertMany(usersCollection)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
