const express = require('express');

const app = express();

app.use(express.json());

let myDB = [];

app.post('/signup', (req, res) => {
  const { login, password } = req.body;

  if (!myDB.length) {
    myDB.push({ login, password });
    return res.json({ msg: 'registered' });
  }

  for (let user of myDB) {
    if (user.login === login) {
      return res.json({ msg: 'User already exists' });
    } else {
      myDB = [...myDB, { login, password }];
      return res.json({ msg: 'registered' });
    }
  }
});

app.post('/login', (req, res) => {
  res.send('login');
});

app.listen(5000, () => {
  console.log('server started on port 5000');
});
