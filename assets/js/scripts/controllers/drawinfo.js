'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawinfoCtrl
 * @description
 * # DrawinfoCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawInfoCtrl', ['$scope', 'DrawerState', function ($scope, DrawerState) {

        $scope.getZoom = function() {
            return DrawerState.getZoom();
        };

        $scope.getCurrentTool = function() {
            return DrawerState.getCurrentTool() ? DrawerState.getCurrentTool() : '-';
        };

        $scope.getFrontColor = function() {
            return DrawerState.getForegroundColor();
        };
        $scope.getBackColor = function() {
            return DrawerState.getBackgroundColor();
        };

    }]);
