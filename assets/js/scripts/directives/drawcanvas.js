'use strict';

/**
 * @ngdoc directive
 * @name canvasApp.directive:DrawCanvas
 * @description
 * # DrawCanvas
 */
angular.module('canvasApp')
  .directive('drawCanvas', ['DrawerState', function (DrawerState) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        var ctx = element[0].getContext("2d");
        ctx.fillStyle = DrawerState.getBackgroundColor();
        ctx.fillRect(0,0,150,75);

      }
    };
  }]);