'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawcanvasCtrl
 * @description
 * # DrawcanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('DrawCanvasCtrl', ['$scope', '$rootScope', 'filesFactory', 'DrawerState',  function ($scope, $rootScope, filesFactory, DrawerState) {

      $scope.files = filesFactory.getAllFiles();

      $scope.setCurrentFileId = DrawerState.setCurrentFileId;

      $scope.getCurrentTool = function() {
          return DrawerState.getCurrentTool();
      };

    }]);
