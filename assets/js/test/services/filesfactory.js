'use strict';

describe('Service: filesFactory', function () {

  // load the service's module
  beforeEach(module('canvasAppApp'));

  // instantiate service
  var filesFactory;
  beforeEach(inject(function (_filesFactory_) {
    filesFactory = _filesFactory_;
  }));

  it('should do something', function () {
    expect(!!filesFactory).toBe(true);
  });

});
