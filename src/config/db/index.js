const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mlops_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('successfully');

    } catch (error) {
        console.log('error');
    }
}

module.exports = { connect };