'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawcanvasCtrl
 * @description
 * # DrawcanvasCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
	.controller('DrawCanvasCtrl', ['$scope', '$rootScope', 'filesFactory', 'DrawerState', 'layersFactory',  function ($scope, $rootScope, filesFactory, DrawerState, layersFactory) {

		$scope.files = filesFactory.getAllFiles();

		$scope.setCurrentFileId = function(id){
				DrawerState.setCurrentFileId(id);
				DrawerState.setCurrentLayerId(filesFactory.getFilesLayers(id)[0].id);
		};

		$scope.getFilesLayers = filesFactory.getFilesLayers;

		$scope.getCurrentFileId = DrawerState.getCurrentFileId;

		$scope.getCurrentLayerId = DrawerState.getCurrentLayerId;

		$scope.getAllFilesLayers = filesFactory.getAllFilesLayers;

		$scope.deleteFile = filesFactory.deleteFile;

		$scope.getLayerById = layersFactory.getLayerById;

		$scope.makeActiveTab = function(curFileId, choosenFileId){
			return (curFileId == choosenFileId)?true:false;
		}

		$scope.getCurrentTool = function() {
	  	return DrawerState.getCurrentTool();
	  };

	}]);
