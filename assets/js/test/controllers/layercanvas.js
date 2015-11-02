'use strict';

describe('Controller: LayercanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasAppApp'));

  var LayercanvasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LayercanvasCtrl = $controller('LayercanvasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
