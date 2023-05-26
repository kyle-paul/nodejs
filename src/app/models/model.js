const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const model = new Schema({
    name: { type : String, default:'', maxLength: 255},
    description: { type: String, default:'this is the discription' },
    image : { type : String, maxLength: 255 },
    CreatedA: { type : Date, default: Date.now },
    UpdateAt: { type : Date, default: Date.now },
});

module.exports = mongoose.model('model', model);