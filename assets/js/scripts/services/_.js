'use strict';

/**
 * @ngdoc service
 * @name underscore.
 * @description
 * # 
 * Factory in the underscore.
 */
angular.module('underscore', [])
  .factory('_', ['$window', function ($window) {
      return $window._;
  }]);
