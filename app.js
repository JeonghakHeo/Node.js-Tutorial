const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send('this is the homepage');
});

app.get('/contact', (req, res)=> {
  res.send('this is the contact');
});

app.listen(3000);