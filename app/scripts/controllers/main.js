'use strict';

angular.module('burgerquestApp')
  .controller('MainCtrl', function ($scope, burgerService) {

    $scope.bestBurger = burgerService.getBestBurger();
    $scope.burgerMaster = burgerService.getBurgerMaster();
    $scope.users = burgerService.getUsers();

    console.log($scope.burgerMaster);

  });
