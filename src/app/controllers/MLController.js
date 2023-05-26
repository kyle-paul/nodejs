// Controller interacts with models
const model = require('../models/model');
const { MongooseToObjet } = require('../../util/mongoose');

class MLController {
    // [GET] /machine_learning/content
    content(req, res, next) {
        model.findOne({ slug: req.params.slug })
            .then((models) => {
                res.render('mlcontent/show', {
                    models : MongooseToObjet(models)
                });
            })
            .catch(next);
    }
  }
  
  module.exports = new MLController();
   