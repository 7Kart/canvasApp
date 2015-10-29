'use strict';

describe('Controller: DrawtoolboxctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasAppApp'));

  var DrawtoolboxctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrawtoolboxctrlCtrl = $controller('DrawtoolboxctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
