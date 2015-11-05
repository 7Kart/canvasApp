'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:LayercanvasCtrl
 * @description
 * # LayercanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
    .controller('LayerCanvasCtrl',['$scope','DrawerState', 'filesFactory', "$uibModal", function($scope, DrawerState, filesFactory,  $uibModal){

      $scope.getCurrentFileId = DrawerState.getCurrentFileId;

      $scope.openNewLayerModal = function (id) {

        var modalInstance = $uibModal.open({
          templateUrl: 'jspartials/modalWindow/fileModalWindow/newLayer.html',
          controller:"NewlayermodalCtrl",
          resolve: {

          }
        });

        modalInstance.result.then(function (newLayer) {
          console.log("newLayer", newLayer);
        });
      };
    }])
