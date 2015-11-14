'use strict';

describe('Directive: DrawCanvas', function () {

  // load the directive's module
  beforeEach(module('canvasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-draw-canvas></-draw-canvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the DrawCanvas directive');
  }));
});
