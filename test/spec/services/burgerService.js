'use strict';

describe('Service: burgerService', function () {

  // load the service's module
  beforeEach(module('burgerquestApp'));

  // instantiate service
  var burgerService;
  beforeEach(inject(function (_burgerService_) {
    burgerService = _burgerService_;
  }));

  it('should do something', function () {
    expect(!!burgerService).toBe(true);
  });

});
