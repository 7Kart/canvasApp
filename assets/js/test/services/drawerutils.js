'use strict';

describe('Service: DrawerUtils', function () {

  // load the service's module
  beforeEach(module('canvasApp'));

  // instantiate service
  var DrawerUtils;
  beforeEach(inject(function (_DrawerUtils_) {
    DrawerUtils = _DrawerUtils_;
  }));

  it('should do something', function () {
    expect(!!DrawerUtils).toBe(true);
  });

});
