const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);

        mongoose.connection
            .on('error', error => reject(error))
            .on('error', function(){
                console.log('Database connection closed.')
            })
            .once('open', function () {
                resolve(mongoose.connections[0])
            });
        mongoose.connect(config.MONGO_URL, {useNewUrlParser: true});
    });
};