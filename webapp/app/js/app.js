'use strict';

var app = angular.module('angularApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/notifyTuto', {
      templateUrl: 'views/notifyTuto.html'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    })
    .when('/products', {
      templateUrl: 'views/products.html',
      controller: 'ProductsCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});

app.controller("MainCtrl", function ($scope) {
    $scope.msg = "The Main Page";
});

app.controller('UsersCtrl', function($scope) {
    $scope.user = "danilo";
});
