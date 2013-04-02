'use strict';

describe('Controller: BurgerDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('burgerquestApp'));

  var BurgerDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    BurgerDetailCtrl = $controller('BurgerDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
