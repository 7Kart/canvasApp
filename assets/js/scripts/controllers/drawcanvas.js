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
      $scope.filesFactory = filesFactory;

      $scope.files = filesFactory.getAllFiles();
      
      $scope.setCurrentFIle = filesFactory.setCurrentFIle;
        
      $scope.getCurrentTool = function() {
          return DrawerState.getCurrentTool();
      };

  }])
