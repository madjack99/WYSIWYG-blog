const express = require('express');
const router = express.Router();

const usersDB = [];

/**
 * @route  POST api/auth
 * @desc   register user
 * @access Public
 */
router.post('/signup', (req, res) => {
  const { name, password } = req.body;

  for (let user of usersDB) {
    if (user.name === name) {
      return res.status(400).json({ msg: 'User already exists' });
    }
  }

  usersDB.push({ name, password });
  res.status(201).json({ msg: 'User created' });
});

module.exports = router;
