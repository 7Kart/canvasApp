'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawinfoCtrl
 * @description
 * # DrawinfoCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawInfoCtrl', ['$scope', 'DrawerState', 'filesFactory', function ($scope, DrawerState, FilesFactory) {

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

        $scope.getShiftX = function() {
            return DrawerState.getShiftX();
        };
        $scope.getShiftY = function() {
            return DrawerState.getShiftY();
        };

        $scope.getFilesCount = function() {
            return FilesFactory.getAllFiles().length;
        };



    }]);
