'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:LayercanvasCtrl
 * @description
 * # LayercanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
    .controller('LayerCanvasCtrl',['$scope','DrawerState', 'filesFactory', "layersFactory", "$uibModal","interfaceServ", function($scope, DrawerState, filesFactory, layersFactory, $uibModal, interfaceServ){

      $scope.activeLayer = interfaceServ.activeLayer;

      $scope.getCurrentFileId = DrawerState.getCurrentFileId;

      $scope.getCurrentFile = filesFactory.getFileById;

      $scope.setCurrentLayerId = DrawerState.setCurrentLayerId;

      $scope.deleteLayer = filesFactory.deleteLayer;

      $scope.selectedLayerIndex = 0;

      $scope.chooseLayer =  function(layerIndex, layerId){
        $scope.selectedLayerIndex = layerIndex;
        DrawerState.setCurrentLayerId(layerId);
      }

      $scope.openNewLayerModal = function (fileID) {

      var modalInstance = $uibModal.open({
          templateUrl: 'jspartials/modalWindow/fileModalWindow/newLayer.html',
          controller:"NewlayermodalCtrl",
          resolve: {
            data:function(){
              return {
                fileID:fileID
              }
            }
          }
        });

        modalInstance.result.then(function (newLayer) {
          var currentFile = filesFactory.getFileById(fileID);
          var newLayer = layersFactory.makeLayer(currentFile.layers, newLayer)
          currentFile.addLayers(newLayer);
          console.log("currentFile", currentFile);
        });
      };
    }])
