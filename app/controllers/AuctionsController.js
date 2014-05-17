var Auction = require('mongoose').model('Auction');

exports.getAuctions = function(req, res) {
    Auction.find().lean().exec(function(err, auctions) {
        return res.end(JSON.stringify(auctions));
    })
};

exports.createAuction = function(req, res) {

    var auctionData = req.body;

    Auction.create(auctionData, function(err) {

        if(err)
        {
            res.status(400);
            return res.send({reason: err.toString()});
        }

        res.end();
    });
};

exports.reset = function(req, res) {

    var auctionId = req.params.auction;

    Auction.findOne({ _id: auctionId }, function(err, auction){

        if(err)
        {
            res.status(400);
            return res.end();
        }

        auction.currentBid = null;
        auction.previousBids = [];
        auction.save(function(err) {

            if(err)
            {
                res.status(400);
                return res.end();
            }

            return res.json({ message: 'Auction reset' });

        });

    });
};

exports.delete = function(req, res) {

    var auctionId = req.params.auction;

    Auction.findOneAndRemove({_id: auctionId }, function(err, auction) {

        if(err)
        {
            res.status(400);
            return res.end();
        }

        if(!auction)
        {
            res.status(404);
            return res.end();
        }

        return res.json({ message: 'Auction deleted'});

    });

}
