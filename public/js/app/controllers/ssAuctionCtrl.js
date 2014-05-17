angular.module('app').controller('ssAuctionCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.newBids = {};
    updateBids();

    $scope.newBid = function(id) {
        $scope.newBids[id] = {};
    }

    $scope.hasNewBid = function(id) {
        return $scope.newBids[id];
    }

    $scope.cancelBid = function(id) {
        delete $scope.newBids[id];
    }

    $scope.placeBid = function(id) {

        var bid = $scope.newBids[id];

        $http.post('/api/auctions/' + id + '/bids', bid).then(function() {
            updateBids();
            delete $scope.newBids[id];
        }, function(err) {
            alert('Bid Error: Your bid could not be placed at this time');
            delete $scope.newBids[id];
        });
    };

    function updateBids() {
        $http.get('/api/auctions').then(function(response) {
            $scope.auctions = response.data;
        });
    };

}]);