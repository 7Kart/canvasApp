'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:NewlayermodalCtrl
 * @description
 * # NewlayermodalCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('NewlayermodalCtrl', function ($scope, $uibModalInstance) {
      $scope.newLayerSubmit = newLayerSubmit;
      $scope.cancel = cancel;

      function newLayerSubmit(){
        $uibModalInstance.close(this.newLayerData);
      }

      function cancel() {
        $uibModalInstance.dismiss('cancel');
      }

    });
