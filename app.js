const express = require('express');
const app = express();

// set up a default view engine with ejs
// by default when we request some views or templates, it's going to look in /views
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=> {
  // send HTML page back by sendFile
  res.render('index');
});

app.get('/contact', (req, res)=> {
  res.render('contact');
});

/*
app.get('/profile/:id', (req, res) => {
  res.send('You requested to see a profile with the id of ' + req.params.id);
});
*/

app.get('/profile/:name', (req, res) => {
  const data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);