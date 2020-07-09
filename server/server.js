const express = require('express');

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);
  res.json('registered');
});

app.post('/login', (req, res) => {
  res.send('login');
});

app.listen(5000, () => {
  console.log('server started on port 5000');
});
