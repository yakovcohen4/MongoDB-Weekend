const Comment = require('../models/comment.js');

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
