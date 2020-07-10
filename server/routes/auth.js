const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Users DB imitation
const usersDB = [];

/**
 * @route  POST api/auth
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

module.exports = router;
