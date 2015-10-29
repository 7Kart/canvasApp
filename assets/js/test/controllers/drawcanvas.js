'use strict';

describe('Controller: DrawcanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasAppApp'));

  var DrawcanvasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrawcanvasCtrl = $controller('DrawcanvasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
