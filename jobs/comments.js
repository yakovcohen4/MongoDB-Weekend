const comments = require('../models/comment');
const Posts = require('../models/post');
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb+srv://******:*******@cluster.ck0tp.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
  .then(async result => {
    console.log('connected to MongoDB job');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

const yakov = () => {
  console.log('in the funccccccccccccccccc');
  mongoose
    .connect(`mongodb+srv://******:*******@cluster.ck0tp.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
    .then(async result => {
      console.log('connected to MongoDB job');
      await comments
        .insertMany(commentsData)
        .then(function () {
          console.log('Data inserted'); // Success
        })
        .catch(function (error) {
          console.log(error); // Failure
        });
    })
    .catch(error => {
      console.log('error connecting to MongoDB:', error.message);
    });
};
// yakov();
// //
function dataInsert(commentsData) {
  for (let comment of commentsData) {
    console.log(comment.post);
    comment.post = getIdPostByTitle(comment.post);
    console.log(comment);
  }
  return commentsData;
}
const commentsData = [
  {
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal!',
    post: 'Borrows something', // "Borrows something"
  },
  {
    username: 'GoodGuyGreg',
    comment: "What's mine is yours!",
    post: 'Borrows everything', // "Borrows everything"
  },
  {
    username: 'GoodGuyGreg',
    comment: "Don't violate the licensing agreement!",
    post: 'Forks your repo on github', // "Forks your repo on github"
  },
  {
    username: 'ScumbagSteve',
    comment: "It still isn't clean",
    post: 'Passes out at party', // "Passes out at party"
  },
  {
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause I found a hack',
    post: 'Reports a bug in your code', // "Reports a bug in your code"
  },
];
dataInsert(commentsData);
function getIdPostByTitle(postTitle) {
  Posts.find({ title: postTitle })
    .then(post => {
      console.log('in the fun');
      console.log(post);
      return post;
    })
    .catch(err => {
      return err;
    });
  // return post._id;
}
console.log('ya');
// console.log(getIdPostByTitle('Reports a bug in your code'));

// comments
//   .insertMany(commentsData)
//   .then(function () {
//     console.log('Data inserted'); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
