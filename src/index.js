const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').engine
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'rescources/views'))

app.get('/home', (req, res) => {
  console.log(req.query.q);
  res.render('home');
});

app.get('/books', (req, res) => {
  res.render('books');
});

app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});