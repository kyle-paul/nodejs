class BookController {
  // [GET] /home
  home(req, res) {
    res.render('home');
  }
  // [GET] /books/search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new BookController();
