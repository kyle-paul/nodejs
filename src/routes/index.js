// import the routes
const booksRouter = require('./books.route');
const siteRouter = require('./site.route');

function route(app) {
    // Action --> Dispatcher --> Function handler
    
    
    app.use('/books', booksRouter);
    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('You have submitted successfully');
    })
}

module.exports = route;