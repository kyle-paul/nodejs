class BookController {
    // [GET] /books
    main_page(req, res){
        res.render('books');
    }
    // [GET] /books/certifications
    certifications(req, res){
        res.render('microsoft_cert');
    }
}

module.exports = new BookController();