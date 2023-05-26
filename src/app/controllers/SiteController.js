// Controller interacts with models
const model = require('../models/model');
const { MultipleMongooseToObject} = require('../../util/mongoose');

// Controller interacts with views
class BookController {
  // [GET] /home
  home(req, res) {
    model.find({})
      .then(models => {  
          res.render('home', {
            models : MultipleMongooseToObject(models)
          });
      })
      .catch(err => {
          res.status(400).json({ error: "404 NOT FOUND" });
      });
  } 

  // [GET] /books/search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new BookController();

// [GET] /home
// async home(req, res) {
//   try {
//     let models = await model.find({});
//     res.json(models);
//   } catch (err) {
//     res.status(400).json({ error: "404 NOT FOUND" });
//   }
// }
