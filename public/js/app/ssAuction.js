angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: '/partials/auction',
        controller: 'ssAuctionCtrl'
    }).otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode(true);

});


