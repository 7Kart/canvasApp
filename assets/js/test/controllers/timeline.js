'use strict';

describe('Controller: TimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('canvasApp'));

  var TimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimelineCtrl = $controller('TimelineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimelineCtrl.awesomeThings.length).toBe(3);
  });
});
