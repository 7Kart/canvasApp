var creator = angular.module('creator', ['ngDragDrop']);

creator.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('creator',{
			url:"/creator",
			templateUrl:"javascripts/creator/creator.html",
			controller:"creatorController",
			authenticate: true
			
		})
})

creator.controller('creatorController', function($scope, $modal, fileFactory){
	
	$scope.files = fileFactory.files || [];

	$scope.currnetFile = null;

	$scope.currentInstrument = null;

	$scope.activeFile = function(file){
		$scope.currnetFile = file
		console.log("currnetFile", file)
	}

	$scope.deleteLayer = function(index){
		$scope.currnetFile.layers.splice(index,1);
	}

	$scope.openCreateModal = function () {
		var modalInstance = $modal.open({
			templateUrl:"javascripts/creator/newCanvas.html",
			controller: "createNewModal",
			resolve:{
				data:function(){
					return{

					}
				}
			}
		});
	
		modalInstance.result.then(function(newFile){		
			fileFactory.createFile(newFile);
			fileFactory.getFiles()
		})
	}

	$scope.openCreateLayerModal = function () {
		var modalInstance = $modal.open({
			templateUrl:"javascripts/creator/newLayer.html",
			controller: "createNewModal",
			resolve:{
				data:function(){
					return{

					}
				}
			}
		});
	
		modalInstance.result.then(function(newLayer){			
			$scope.currnetFile.layers.push(new Layer(newLayer));
		})
	}

})


.controller('createNewModal', function(data, $scope, $modalInstance){		
	
	$scope.ok = function () {
		$modalInstance.close($scope.model);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
})


creator.factory('fileFactory', function(){	

	return{
		files:[new File({fileName:"test", fileWidth:500, fileHeight:500})],

		createFile: function(file){
			this.files.push(new File(file));			
		},
		getFiles: function(){
			console.log('FILES',this.files)
		}
	}
})