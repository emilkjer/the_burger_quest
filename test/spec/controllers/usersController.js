'use strict';

describe('Controller: UsersControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('burgerquestApp'));

  var UsersControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    UsersControllerCtrl = $controller('UsersControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
