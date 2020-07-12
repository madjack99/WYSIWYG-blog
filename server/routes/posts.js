const express = require('express');
const router = express.Router();

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

/**
 * @route  GET /api/posts
 * @desc   get all posts
 * @access Private
 */
router.get('/', (req, res) => {
  res.json({ posts: postsDB });
});

/**
 * @route   POST /api/posts/add-post
 * @desc    add new post to postsDB
 * @access  Private
 */
router.post('/add-post', (req, res) => {
  const { author, content, date, id, title } = req.body;
  const newPost = { author, content, date, id, title };
  postsDB.push(newPost);
  res.status(201).json({ msg: 'New post was added to DB' });
});

module.exports = router;
