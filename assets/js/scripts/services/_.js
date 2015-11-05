'use strict';

/**
 * @ngdoc service
 * @name canvasApp.
 * @description
 * # 
 * Factory in the canvasApp.
 */
angular.module('underscore')
  .factory('_', ['$window', function ($window) {
      return $window._;
  }]);
