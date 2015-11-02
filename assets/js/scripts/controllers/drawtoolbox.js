'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawtoolboxctrlCtrl
 * @description
 * # DrawtoolboxctrlCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawToolboxCtrl', ['$scope', 'DrawerState', function ($scope, DrawerState) {

        $scope.currentTool = null;

        $scope.setTool = function(tool) {
            DrawerState.setCurrentTool(tool);
            $scope.currentTool = tool;
        };

        $scope.zoomIn = function() {
            console.log("test");
            DrawerState.incZoom(0.05);
        };
        $scope.zoomOut = function() {
            DrawerState.incZoom(-0.05);
        };

  }]);
