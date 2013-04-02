'use strict';

angular.module('burgerquestApp')
  .controller('UsersCtrl', function ($scope, $routeParams, burgerService) {

    $scope.users = burgerService.getUsers();

    if($routeParams.user){
        $scope.user = burgerService.getUserBySlug($routeParams.user);
        if(!$scope.user) return;

        $scope.recommendations = burgerService.getBurgersByRecommender($scope.user.slug);
    }

  });
