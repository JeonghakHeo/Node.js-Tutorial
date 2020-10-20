const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

// set up a default view engine with ejs
// by default when we request some views or templates, it's going to look in /views
app.set('view engine', 'ejs'); 

// Middleware
/*
app.use('/assets', (req, res, next) => {
  console.log(req.url);
  next();
});
*/

// matches after /assets in the url
app.use('/assets', express.static('assets'));

app.get('/', (req, res)=> {
  // send HTML page back by sendFile
  res.render('index');
});

app.get('/contact', (req, res) => {
  // console.log(req.query);
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
  // console.log(req.query);
  console.log(req.body);
  res.render('contact-success', {data: req.body});
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