var canvasApp = angular.module('canvasApp',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/draw");

		$stateProvider
			.state('draw', {
				url: "/draw",
				templateUrl: "jspartials/draw.html"
			})
	})
.run(function($rootScope){
	console.log("run apps");
})
