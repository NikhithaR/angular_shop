
angular.module('checkout', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        'use strict';

        $routeProvider.when('/checkout', {
            templateUrl: 'public/checkout/checkout.html',
            controller: 'CheckoutCtrl'
        });
    }])

    .controller('CheckoutCtrl', ['$scope', 'CommonProp', function ($scope, CommonProp) {
        'use strict';
        $scope.items = CommonProp.getItems();	
        $scope.total = CommonProp.getTotal();
    }]);