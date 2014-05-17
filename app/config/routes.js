var auctionsController = require('../controllers/AuctionsController'),
    bidsController = require('../controllers/BidsController'),
    auth = require('./auth');

module.exports = function(app) {

    app.get('/partials/*', function(req, res) {
        res.render('angular/' + req.params);
    });

    app.all('/api/*', function(req, res, next){
       res.type('json');
       next();
    });

    app.get('/api/auctions', auctionsController.getAuctions);
    app.post('/api/auctions', auth.validateIP, auctionsController.createAuction);
    app.post('/api/auctions/:auction/bids', bidsController.placeBid);
    app.get('/api/auctions/:auction/reset', auth.validateIP,auctionsController.reset);
    app.delete('/api/auctions/:auction', auth.validateIP, auctionsController.delete);

    app.get('*', function(req, res) {
        res.render('index');
    });

};
