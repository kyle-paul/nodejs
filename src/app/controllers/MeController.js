// Controller interacts with models
const model = require('../models/model');
const { MultipleMongooseToObject } = require('../../util/mongoose');
const { MongooseToObjet } = require('../../util/mongoose');


class MeController {
    // [GET] /me/stored/my_contents
    my_contents(req, res, next) {
        model.find({})
            .then(models => {
                res.render('me/my-contents', {
                    models: MultipleMongooseToObject(models)
                });
            })
            .catch(next)
    }

    // [GET] /me/:id/edit_contents
    edit_contents(req, res, next) {
        model.findById(req.params.id)
            .then(models => {
                res.render('me/edit-contents', {
                    models: MongooseToObjet(models)
                });
            })
            .catch(next)
    }

    // [PUT] /me/:id/update_contents
    update_contents(req, res, next) {
        model.updateOne({_id: req.params.id}, req.body)
            .then(models => {
                 res.redirect(('stored/my_contents'))
            })
            .catch(next)
    }

    // [DELETE] /me/:id/delete_contents
    delete_contents(req, res, next) {
        model.deleteOne({_id: req.params.id}) 
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new MeController();
