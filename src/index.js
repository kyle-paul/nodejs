const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').engine;
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes/');

// Configure the path for public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extende: true,
  }),
);

// HTTP logger for morgan
app.use(morgan('combined'));

// Template engine - configure the path for express-handlebars
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'rescources/views'));

// Routes init -> access to function route
route(app);

// listen on port
app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});
