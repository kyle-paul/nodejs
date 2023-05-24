const booksRouter = require('./books');

function route(app) {
    // Action --> Dispatcher --> Function handler
    app.get('/home', (req, res) => {
        res.render('home');
    });
    
    app.use('/books', booksRouter);
    
    app.get('/search', (req, res) => {
        res.render('search');
    })
    
    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('You have submitted successfully');
    })
}

module.exports = route;