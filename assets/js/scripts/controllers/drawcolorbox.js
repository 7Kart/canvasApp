'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawcanvasCtrl
 * @description
 * # DrawcanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
    .controller('DrawColorboxCtrl', ['$scope', 'DrawerState', function ($scope, DrawerState) {

        $scope.frontColor = DrawerState.getForegroundColor();
        $scope.backColor = DrawerState.getBackgroundColor();

        var getRandomHexColor = function() {
            return '#'+Math.floor(Math.random()*16777215).toString(16);
        };

        $scope.randomFrontColor = function() {
            DrawerState.setForegroundColor(getRandomHexColor());
        };
        $scope.randomBackColor = function() {
            DrawerState.setBackgroundColor(getRandomHexColor());
        };

        $scope.getFrontColor = function() {
            return DrawerState.getForegroundColor();
        };
        $scope.getBackColor = function() {
            return DrawerState.getBackgroundColor();
        };

        $scope.swapColors = function() {
            var tmp = DrawerState.getForegroundColor();
            DrawerState.setForegroundColor(DrawerState.getBackgroundColor());
            DrawerState.setBackgroundColor(tmp);
        };

    }]);
