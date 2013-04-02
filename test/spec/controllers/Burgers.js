'use strict';

describe('Controller: BurgersCtrl', function () {

  // load the controller's module
  beforeEach(module('burgerquestApp'));

  var BurgersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    BurgersCtrl = $controller('BurgersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
