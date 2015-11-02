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

        var getRandomHexColor = function() {
            return '#'+Math.floor(Math.random()*16777215).toString(16);
        };

        $scope.randomFrontColor = function() {
            $scope.frontColor = getRandomHexColor();
        };
        $scope.randomBackColor = function() {
            $scope.backColor = getRandomHexColor();
        };

    }]);
