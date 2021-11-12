const express = require('express');
const router = express.Router();
const { listAllUsers } = require('../controller/user');
const { listAllPosts, listAllPostsByAuthor } = require('../controller/post');
const { listAllComments, listAllCommentsByAuthor, listAllCommentsByPost } = require('../controller/comment');
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

//
// define the home page route

// user
router.get('/list/all/users', listAllUsers);

// post
router.get('/list/all/posts', listAllPosts);
router.get('/list/all/posts/:author', listAllPostsByAuthor);

// comment
router.get('/list/all/comments', listAllComments);
router.get('/list/all/comments/:author', listAllCommentsByAuthor);
router.get('/list/all/post/comments/:title', listAllCommentsByPost);

module.exports = router;
