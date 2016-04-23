'use strict';

/**
 * @ngdoc service
 * @name canvasApp.timeLineService
 * @description
 * # timeLineService
 * Factory in the canvasApp.
 */

angular.module('canvasApp')
  .service('timeLineService', function (_) {

    this.makeNumberArray = function(length){
      return  new Array(length);
    },

    this.mouseDown = function(){
      console.log("mouseDown");
    }

    this.dropTimeLine = function(){
      console.log("drop");
    }

});
