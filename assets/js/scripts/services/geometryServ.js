'use strict';

/**
 * @ngdoc service
 * @name canvasApp.DrawerState
 * @description
 * # DrawerState
 * Factory in the canvasAppApp.
 */

angular.module('canvasApp')
    .service('geometryServ', function () {

      this.distBetweenPoint = function(point1, point2){
        return Math.sqrt(Math.pow(point2.x-point1.x)+Math.pow(point2.y-point1.y));
      }

    });
