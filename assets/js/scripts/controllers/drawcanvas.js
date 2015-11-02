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

      $scope.files = filesFactory.getAllFiles();

      $scope.setCurrentFIle = filesFactory.setCurrentFIle;
        
      $scope.getCurrentTool = function() {
          return DrawerState.getCurrentTool();
      };

  }])

    .controller('LayerCanvasCtrl',['$scope', 'filesFactory', "$uibModal", function($scope, filesFactory,  $uibModal){

        $scope.currentFile = filesFactory.getCurrentFile();

        $scope.openNewLayerModal = function () {

            var modalInstance = $uibModal.open({
                templateUrl: 'jspartials/modalWindow/fileModalWindow/newLayer.html',
                controller:"newLayerModalController",
                resolve: {

                }
            });

            modalInstance.result.then(function (newLayer) {
                console.log("newLayer", newLayer);
            });
        };
    }])

    .controller("newLayerModalController", function($scope, $uibModalInstance){
        $scope.newLayerSubmit = newLayerSubmit;
        $scope.cancel = cancel;

        function newLayerSubmit(){
            $uibModalInstance.close(this.newLayerData);
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

    });