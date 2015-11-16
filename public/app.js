angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.otherwise({
            redirectTo: '/cart'
        });
    }]);
