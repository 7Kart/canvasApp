'use strict';

describe('Controller: DrawinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasAppApp'));

  var DrawinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrawinfoCtrl = $controller('DrawinfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
