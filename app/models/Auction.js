var mongoose = require('mongoose');

module.exports = function() {

    var auctionSchema = mongoose.Schema({
        name: String,
        type: String,
        expires: Date,
        imageUri: { type: String, default: null },
        currentBid: {
            type: {
                amount: Number,
                character: String,
                datePlaced: { type: Date, default: Date.now }
            },
            default: null
        },
        previousBids: {
            type: [{
                amount: Number,
                character: String,
                datePlaced: Date
            }],
            default: []
        }
    });

    mongoose.model('Auction', auctionSchema);

};

