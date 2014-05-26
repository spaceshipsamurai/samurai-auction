angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: '/partials/auction',
        controller: 'ssAuctionCtrl'
    }).when('/auctions/:id/history', {
        templateUrl: '/partials/bids',
        controller: 'ssBidHistoryCtrl'
    }).otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode(true);

});


