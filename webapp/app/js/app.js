'use strict';

  var app = angular.module('angularApp', ['ngRoute']);
    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.php',
          controller: 'MainCtrl'
        })
        .when('/notifyTuto', {
          templateUrl: 'views/notifyTuto.html'
        })
        .when('/users', {
          templateUrl: 'views/users.php',
          controller: 'UsersCtrl'
        })
        .when('/products', {
          templateUrl: 'views/products.php',
          controller: 'ProductsCtrl'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    app.controller("MainCtrl", function ($scope) {
        $scope.msg = "The Main Page";
    });

app.controller('UsersCtrl', function($scope) {
    console.log('ola');
    $scope.user = "danilo";
});
