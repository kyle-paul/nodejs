// import the routes
const booksRouter = require('./books.route');
const siteRouter = require('./site.route');
const mlRouter = require('./ml.route');
const meRouter = require('./me.route');


function route(app) {
  // Action --> Dispatcher --> Function handler
  app.use('/books', booksRouter);
  app.use('/machine_learning', mlRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);

  app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('You have submitted successfully');
  });
}

module.exports = route;
