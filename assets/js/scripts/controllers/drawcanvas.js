'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawcanvasCtrl
 * @description
 * # DrawcanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawCanvasCtrl', ['$scope', 'filesFactory', 'DrawerState',  function ($scope,filesFactory, DrawerState) {

      console.log("filesFactory", filesFactory.getAllFiles());
      $scope.files = filesFactory.getAllFiles();

      $scope.getCurrentTool = function() {
          return DrawerState.getCurrentTool();
      };

  }]);
