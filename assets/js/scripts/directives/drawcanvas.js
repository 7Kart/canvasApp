'use strict';

/**
 * @ngdoc directive
 * @name canvasApp.directive:DrawCanvas
 * @description
 * # DrawCanvas
 */
angular.module('canvasApp')
  .directive('drawCanvas', ['DrawerState', 'DrawerShapesFactory', function (DrawerState, DrawerShapesFactory) {
    return {
      restrict: 'A',
      link: function postLink($scope, element, attrs) {

        $scope.$on('redrawCanvas', function(){

          var shape = DrawerShapesFactory.createRectangle({
            x: 10,
            y: 10,
            height: 20,
            width: 20,
            color: DrawerState.getForegroundColor(),
            bgColor: DrawerState.getBackgroundColor()
          });

          var ctx = element[0].getContext("2d");

          ctx.clearRect(0, 0, 1000, 1000);
          shape.draw(ctx, DrawerState.getDrawViewModifier());

        });

      }
    };
  }]);