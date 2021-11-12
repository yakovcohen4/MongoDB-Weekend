const Post = require('../models/post.js');

exports.listAllPosts = async (req, res, next) => {
  try {
    console.log('postlist');
    const postList = await Post.find({});
    console.log(postList, 'postlist');
    res.status(200).json(postList);

    // this is what i assume you meant
    if (postList.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};

exports.listAllPostsByAuthor = async (req, res, next) => {
  try {
    console.log('listAllPostsByAuthor');
    const { author } = req.params;
    const postsListByAuthor = await Post.find({ username: author });
    console.log(postsListByAuthor, 'listAllPostsByAuthor');
    res.status(200).json(postsListByAuthor);

    // this is what i assume you meant
    if (postsListByAuthor.length === 0) next(new Error('no users found in db'));
  } catch (error) {
    next(error);
  }
};
