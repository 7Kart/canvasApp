'use strict';

/**
 * @ngdoc function
 * @name canvasApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the canvasApp
 */
angular.module('canvasApp')
  .controller('TimelineCtrl', function (filesFactory, DrawerState, $scope) {

    $scope.getFileById = filesFactory.getFileById;

    $scope.getCurrentFileId = DrawerState.getCurrentFileId;

    $scope.getFileById = filesFactory.getFileById;

    $scope.getAllFilesShapes = filesFactory.getAllFilesShapes;


  });
