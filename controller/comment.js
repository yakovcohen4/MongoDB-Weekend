const Comment = require('../models/comment.js');
const Post = require('../models/post.js');

exports.listAllComments = async (req, res, next) => {
  try {
    console.log('Commentlist');
    const CommentList = await Comment.find({});
    console.log(CommentList, 'Commentlist');
    res.status(200).json(CommentList);

    // this is what i assume you meant
    if (CommentList.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};

exports.listAllCommentsByAuthor = async (req, res, next) => {
  try {
    console.log('listAllCommentsByAuthor');
    const { author } = req.params;
    const commentsListByAuthor = await Comment.find({ username: author });
    console.log(commentsListByAuthor, 'listAllCommentsByAuthor');
    res.status(200).json(commentsListByAuthor);

    // this is what i assume you meant
    if (commentsListByAuthor.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};

exports.listAllCommentsByPost = async (req, res, next) => {
  try {
    console.log('listAllCommentsByPost');
    const { title } = req.params;
    console.log('title ' + title);
    const post = await Post.find({ title: title });
    console.log(post);
    console.log(post[0]._id);

    const commentsListByPost = await Comment.find({ post: post[0]._id });
    console.log(commentsListByPost, 'listAllCommentsByPost');
    res.status(200).json(commentsListByPost);

    // this is what i assume you meant
    if (commentsListByPost.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};
