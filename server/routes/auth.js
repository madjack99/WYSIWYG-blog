const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Users DB imitation
const usersDB = [];

/**
 * @route  POST api/auth/signup
 * @desc   register user
 * @access Public
 */
router.post('/signup', async (req, res) => {
  const { name, password } = req.body;

  for (let user of usersDB) {
    if (user.name === name) {
      return res.status(400).json({ msg: 'User already exists' });
    }
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name, password: hashedPassword };
    usersDB.push(newUser);

    res.status(201).json({ msg: 'User created' });
    console.log(usersDB);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

/**
 * @route  POST /api/auth/login
 * @desc   Log in existing user
 * @access Public
 */
router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  const user = usersDB.find((user) => {
    return user.name === name;
  });

  if (!user) {
    return res.status(400).json({ msg: 'The user does not exist' });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).json({ msg: 'Login successful' });
    } else {
      res.status(401).json({ msg: 'Incorrect password' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
