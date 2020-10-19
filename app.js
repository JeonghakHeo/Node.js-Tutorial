const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send('this is the homepage');
});

app.get('/contact', (req, res)=> {
  res.send('this is the contact');
});

app.get('/profile/:id', (req, res) => {
  res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.get('/user/:name', (req, res) => {
  res.send('You requested to see a profile with the name of ' + req.params.name);
});

app.listen(3000);