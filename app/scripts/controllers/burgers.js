'use strict';

angular.module('burgerquestApp')
  .controller('BurgersCtrl', function ($scope, burgerService, $routeParams) {

    $scope.burgers = burgerService.getBurgers() || [];

    if($routeParams.burger) $scope.burger = burgerService.getBurgerBySlug($routeParams.burger);

    $scope.addScore = function(burgerslug, score){
        var burger = burgerService.getBurgerBySlug(burgerslug);

        burger.scores.push({
            user: score.user,
            burger: score.burger,
            venue: score.venue,
            comments: score.comments
        });
    }

  });
