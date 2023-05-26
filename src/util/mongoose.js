module.exports = {
    MultipleMongooseToObject: function (mongooseArray) {
        return  mongooseArray.map(mongooseArray => mongooseArray.toObject());
    },
    MongooseToObjet: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }   
};