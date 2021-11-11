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
const commentsData = [
  {
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal!',
    post: [post_obj_id],
  },
  {
    username: 'GoodGuyGreg',
    comment: "What's mine is yours!",
    post: [post_obj_id],
  },
  {
    username: 'GoodGuyGreg',
    comment: "Don't violate the licensing agreement!",
    post: [post_obj_id],
  },
  {
    username: 'ScumbagSteve',
    comment: "It still isn't clean",
    post: [post_obj_id],
  },
  {
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause I found a hack',
    post: [post_obj_id],
  },
];
Students.insertMany(commentsData)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
