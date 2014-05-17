var Auction = require('mongoose').model('Auction');

exports.placeBid = function(req, res) {

    var bidData = req.body;

    Auction.findOne({_id: req.params.auction }, function(err, item) {

        if(err || !bidData.name)
        {
            console.log(err);
            res.status(400);
            return res.end();
        }

        if(item.currentBid)
        {
            if(bidData.amount <= item.currentBid.amount)
            {
                console.log(item.currentBid.amount);
                console.log(bidData.amount);

                res.status(400);
                return res.end();
            }
        }

        item.currentBid = {
            amount: bidData.amount,
            character: bidData.name,
            datePlaced: Date.now()
        };

        item.previousBids.push(item.currentBid);

        item.save(function(err) {

            if(err)
            {
                console.log(err);
                res.status(400);
                return res.end();
            }

            return res.end();

        })


    });

};
