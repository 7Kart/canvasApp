'use strict';

describe('Service: layersFactory', function () {

  // load the service's module
  beforeEach(module('canvasApp'));

  // instantiate service
  var layersFactory;
  beforeEach(inject(function (_layersFactory_) {
    layersFactory = _layersFactory_;
  }));

  it('should do something', function () {
    expect(!!layersFactory).toBe(true);
  });

});
