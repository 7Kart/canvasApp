'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:NavbarcontrollerCtrl
 * @description
 * # NavbarcontrollerCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
  .controller('NavbarCtrl', function ($scope, $uibModal) {

      $scope.openNewFileModal = function (size) {

        var modalInstance = $uibModal.open({
          templateUrl: 'jspartials/modalWindow/fileModalWindow/newFile.html',
          controller:"newFileModalController",
          resolve: {

          }
        });

        modalInstance.result.then(function (newFile) {
          console.log("this.fileData",this.fileData);
        });
      };

  })

  .controller("newFileModalController", function($scope, $uibModalInstance){
    $scope.newFileSubmit = newFileSubmit;
    $scope.cancel = cancel;

    function newFileSubmit(){
      $uibModalInstance.close(this.fileData);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

  });

