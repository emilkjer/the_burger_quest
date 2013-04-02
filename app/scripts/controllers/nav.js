'use strict';

angular.module('burgerquestApp')
  .controller('NavCtrl', function ($scope, $routeParams) {

    $scope.users = burgerService.getUsers();

    if($routeParams.user){
        $scope.user = burgerService.getUserBySlug($routeParams.user);
    }

  });
