// Controller interacts with models
const model = require('../models/model');
const { MongooseToObjet } = require('../../util/mongoose');

class MLController {
    // [GET] /machine_learning/content
    content(req, res, next) {
        model.findOne({ slug: req.params.slug })
            .then((models) => {
                res.render('mlcontent/show', {
                    models: MongooseToObjet(models)
                });
            })
            .catch(next);
    }

    // [GET] /machine_learning/create_content
    create_content(req, res, next) {
        res.render('mlcontent/create_content');
    }

    // [POST] /machine_learning/store_content
    store_content(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoid}/0.jpg`;
        const my_model = new model(formData);
        my_model.save()
            .then(() => res.redirect('/'))
            .catch(error => { });
    }

    // [GET] /machine_learning/edit
    edit(req, res, next) {
        res.render('mlcontent/edit');
    }
}

module.exports = new MLController();
