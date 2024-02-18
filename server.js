const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000
const version = process.env.VERSION || '0.0.0'

app.get('/', (req, res) => {
  res.send('Hello World! ' + version);
});

app.listen(port, () => {
    console.log(`Example app listening`);
});
