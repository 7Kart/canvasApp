'use strict';

describe('Controller: NewlayermodalCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasAppApp'));

  var NewlayermodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewlayermodalCtrl = $controller('NewlayermodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
