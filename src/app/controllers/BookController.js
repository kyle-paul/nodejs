class BookController {
    // [GET] /news
    index(req,res){
        res.render('books');
    }

    // [GET] /news/:slugs
    show_details(req, res){
        res.render('microsoft_cert');
    }
}

module.exports = new BookController();