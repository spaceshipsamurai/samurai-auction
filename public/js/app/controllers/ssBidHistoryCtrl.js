angular.module('app').controller('ssBidHistoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {


        $http.get('/api/auctions/' + $routeParams.id).then(function(res){

            var auction = res.data;
            console.log(auction);
            if(auction.previousBids)
            {
                auction.previousBids.sort(function(a, b){
                    if(a.amount < b.amount) return 1;
                    if(b.amount < a.amount) return -1;
                    return 0;
                });
            }

            $scope.auction = auction;
        });

}]);
