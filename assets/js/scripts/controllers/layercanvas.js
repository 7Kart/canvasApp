'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:LayercanvasCtrl
 * @description
 * # LayercanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
    .controller('LayerCanvasCtrl',['$scope', 'filesFactory', "$uibModal", function($scope, filesFactory,  $uibModal){

      $scope.filesFactory = filesFactory;

      $scope.$watch('filesFactory.getCurrentFile()', function(currrentFile){
        $scope.currrentFile = currrentFile;
      });

      $scope.openNewLayerModal = function () {

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
