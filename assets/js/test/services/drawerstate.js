'use strict';

describe('Service: DrawerState', function () {

  // load the service's module
  beforeEach(module('canvasAppApp'));

  // instantiate service
  var DrawerState;
  beforeEach(inject(function (_DrawerState_) {
    DrawerState = _DrawerState_;
  }));

  it('should do something', function () {
    expect(!!DrawerState).toBe(true);
  });

});
