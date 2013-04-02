'use strict';

angular.module('burgerquestApp')
  .controller('BurgersCtrl', function ($scope, burgerService, $routeParams) {

    $scope.burgers = burgerService.getBurgers() || [];

    if($routeParams.burger) $scope.burger = burgerService.getBurgerBySlug($routeParams.burger)

  });
