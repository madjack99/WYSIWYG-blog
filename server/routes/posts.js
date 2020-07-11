const express = require('express');
const router = express.Router();

/**
 * @route  GET /api/posts
 * @desc   get all posts
 * @access Private
 */

const postsDB = [];

router.get('/', (req, res) => {
  res.json({ posts: postsDB });
});

module.exports = router;
