//(function(){
	'use strict'

	var auth = angular.module('auth', ['ui.bootstrap.modal'])


	auth.run(function(){
				
	});

	auth.config(function($stateProvider, $urlRouterProvider){
    	//cfpLoadingBarProvider.includeSpinner = false;		
		$stateProvider
			.state('home', {
				url:"/",
				controller: "homeController",
				authenticate: true
			})
	});

	auth.controller('homeController', function($scope, $rootScope){
		console.log('home controller');		
	})


	auth.factory('authFactory', function($http, $q){
		return{
			auth: function(){
				var deferred = $q.defer();
				$http.get("users/auth").success(function(user){
					deferred.resolve(user);
				}).error(function(error){
					deferred.reject(error);
				});
				return deferred.promise;
			},
			login: function(data){
				var deferred = $q.defer();
				$http.post("users/login", data).success(function(user){
					deferred.resolve(user);
				}).error(function(error){
					deferred.reject(error);
				});
				return deferred.promise;
			},
			registrate: function(data){
				var deferred = $q.defer();
				$http.post("users/registrate",data).success(function(user){
					deferred.resolve(user);
				}).error(function(error){
					deferred.reject(error);
				});
				return deferred.promise;
			},
			logout: function(callback, errCallback){
				$http.post("users/logout").success(callback).error(errCallback);
			}
		}
	})


//})()