const express = require('express');
const router = express.Router();

/**
 * @route  GET /api/posts
 * @desc   get all posts
 * @access Private
 */

const postsDB = [
  {
    title: 'First post',
    text: 'Some text',
    date: '11/07/2020',
    author: 'Alex',
  },
  {
    title: 'First post',
    text: 'Some text',
    date: '11/08/2020',
    author: 'Alex',
  },
  {
    title: 'First post',
    text: 'Some text',
    date: '11/09/2020',
    author: 'Alex',
  },
  {
    title: 'First post',
    text: 'Some text',
    date: '11/03/2020',
    author: 'Alex',
  },
];

router.get('/', (req, res) => {
  res.json({ posts: postsDB });
});

module.exports = router;
