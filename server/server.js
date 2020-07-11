const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`server started on port ${PORT}`);
});
