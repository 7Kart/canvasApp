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

        $scope.setTool = function(tool) {
            DrawerState.setCurrentTool(tool);
        }

  }]);
