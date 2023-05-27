// Controller interacts with models
const model = require('../models/model');
const { MultipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/my_contents
    my_contents(req, res, next) {
        model.find({})
            .then(models => { res.render('me/my-contents', {
                models : MultipleMongooseToObject(models)
            });
        })
        .catch(next)
    }
}

module.exports = new MeController();
