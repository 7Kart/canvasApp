var canvasApp = angular.module('canvasApp',[
	'ui.router',
	'auth',
	'CommonServices', 
	'ui.bootstrap',
	'ui.bootstrap.modal',
	'ui.bootstrap.progressbar',
	'angular-loading-bar', 
	'ngAnimate',
	'ngCookies',
	'creator',
	'ngDragDrop',
	'creatorDirectives'
])
	.run(function($rootScope, authFactory, $state, $cookies, $cookieStore){
		$rootScope.user = null
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			if($rootScope.user == null && toState.authenticate != false){							
				event.preventDefault();				
				authFactory.auth().then(function(result){
					if(result.code === 200 && result.user != undefined){					
						$rootScope.user = result.user;						
						$state.go(toState.name);
					}else{
					 	$rootScope.user = null;
					 	$state.get('home').authenticate = false;	
						$state.go('home');					 				 	
					}
				});
			}
		});
	})

	.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    	cfpLoadingBarProvider.includeSpinner = false;		
		$urlRouterProvider.otherwise("/");
	})

	.controller('navBarController', function($scope, $rootScope, $modal, authFactory, $state){		
		


		$scope.logout = function(){
			authFactory.logout(function(){
				$state.get('home').authenticate = false;
				$state.go('home');
				$rootScope.user = null;
			});
		}

		$scope.openAuthModal = function(login){
			var modalInstance = $modal.open({
				templateUrl:"javascripts/auth/login.html",
				windowClass: "controls",
				controller: "loginOrRegisterModal",
				resolve:{
					data:function(){
						return{
							login: login
						}
					}
				}
			});
		}
	})

	.controller('loginOrRegisterModal', function(data, $scope, $modalInstance, authFactory, $rootScope, $state ){		
		$scope.dataForModel = data;
		$scope.model = {};
		$scope.message = null;
		$scope.send = function(){
			if (data.login){
				authFactory.login($scope.model).then(function(result){
					logReqCallback(result);
				})
			}else{
				authFactory.registrate($scope.model).then(function(result){
					logReqCallback(result);
				})
			}
		}
			
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

		function logReqCallback(result){
			if(result.code === 200){							
						console.log('RESULT',result)
						$rootScope.user = result.user;
						$state.get('home').authenticate = true;
						$scope.message = null;	
						$modalInstance.close();						
					}else{
						$scope.message = result.message;
					}
		}
	})