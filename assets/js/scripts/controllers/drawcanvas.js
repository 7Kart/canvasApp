'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawcanvasCtrl
 * @description
 * # DrawcanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawCanvasCtrl', ['$scope', 'filesFactory', 'DrawerState',  function ($scope, filesFactory, DrawerState) {

      $scope.files = filesFactory.getAllFiles();

      $scope.watchFilesFactory = filesFactory;
        
      $scope.$watch('watchFilesFactory.makeFile', function(){
          console.log("file was made");
      });  

      $scope.setCurrentFileId = DrawerState.setCurrentFileId;

      $scope.getCurrentTool = function() {
          return DrawerState.getCurrentTool();
      };

  }])
