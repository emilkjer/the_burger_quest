'use strict';

angular.module('burgerquestApp', ['ui.bootstrap'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/userList.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:user', {
        templateUrl: 'views/userDetail.html',
        controller: 'UsersCtrl'
      })
      .when('/burgers', {
        templateUrl: 'views/burgerList.html',
        controller: 'BurgersCtrl'
      })
      .when('/burgers/:burger', {
        templateUrl: 'views/burgerDetail.html',
        controller: 'BurgersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
