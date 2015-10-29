'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawcanvasCtrl
 * @description
 * # DrawcanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawCanvasCtrl', ['$scope', 'DrawerState', function ($scope, DrawerState) {

      $scope.getCurrentTool = function() {
          return DrawerState.getCurrentTool();
      };

  }]);
