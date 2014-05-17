var mongoose = require('mongoose');



module.exports = function(config) {

    mongoose.connect(config.mongoDb);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error....'));
    db.once('open', function() {
        console.log('Mono DB connection open...');
    });



    require('../models/Auction')();


};
