'use strict';

describe('Controller: LayerstoolsCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasAppApp'));

  var LayerstoolsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LayerstoolsCtrl = $controller('LayerstoolsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LayerstoolsCtrl.awesomeThings.length).toBe(3);
  });
});
