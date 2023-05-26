// read the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// automatical slug generator
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const model = new Schema({
    name: { type : String, required: true},
    description: { type: String, required: true},
    image : { type : String},
    videoid : { type : String, required: true},
    level : { type : String, required: true},
    slug: { type: String, slug: 'name', uniqe: true},
}, { 
    timestamps: true,
});

module.exports = mongoose.model('model', model);