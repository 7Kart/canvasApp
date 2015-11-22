'use strict';

/**
 * @ngdoc service
 * @name canvasApp.DrawerState
 * @description
 * # DrawerState
 * Factory in the canvasAppApp.
 */
angular.module('canvasApp')
  .factory('DrawerState', ['$rootScope', function ($rootScope) {

    // @see /docs/shape_drawers.md
    var DrawModifier = function() {
      this.shiftX = 0;
      this.shiftY = 0;
      this.zoom = 1;
      this.modifyXCoordinate = function(val) {
        return (val + this.shiftX) * this.zoom;
      };
      this.modifyYCoordinate = function(val) {
        return (val + this.shiftY) * this.zoom;
      };
      this.modifyMetric = function(val) {
        return val * zoom;
      };
    };

    var currentTool = null;
    var zoom = 1.0;
    var foregroundColor = '#ecd6ae';
    var backgroundColor = '#e3efd5';
    var currentFileId = null;
    var currentLayerId = null;
    var currentObjectId = null;
    var drawViewModifier = new DrawModifier();
    var shiftX = 0;
    var shiftY = 0;

    // Public API here
    return {

      getCurrentFileId: function(){
        return currentFileId;
      },

      setCurrentFileId: function(id){
        currentFileId = id;
      },

      getCurrentObjectId: function(){
        return currentObjectId;
      },

      setCurrentObjectId: function(id){
        currentObjectId = id;
      },

      getCurrentLayerId: function(){
        return currentLayerId;
      },

      setCurrentLayerId: function(id){
        currentLayerId = id;
      },

      getCurrentTool: function () {
        return currentTool;
      },
      setCurrentTool: function (newTool) {
        currentTool = newTool;
      },

      getZoom: function() {
        return zoom;
      },
      setZoom: function(newZoom) {
        drawViewModifier.zoom = zoom = newZoom;
        $rootScope.$broadcast('redrawCanvas');
      },
      incZoom: function(incZoom) {
        if (zoom + incZoom > 0 && zoom + incZoom < 2) {
          zoom += incZoom;
          zoom = parseInt(zoom * 100) / 100;
          drawViewModifier.zoom = zoom;
          $rootScope.$broadcast('redrawCanvas');
        }
        return zoom;
      },

      getShiftX: function() {
        return shiftX;
      },
      setShiftX: function(newShift) {
        drawViewModifier.shiftX = shiftX = newShift;
        $rootScope.$broadcast('redrawCanvas');
      },

      getShiftY: function() {
        return shiftY;
      },
      setShiftY: function(newShift) {
        drawViewModifier.shiftY = shiftY = newShift;
        $rootScope.$broadcast('redrawCanvas');
      },

      setForegroundColor: function(color) {
        foregroundColor = color;
        $rootScope.$broadcast('redrawCanvas');
      },
      getForegroundColor: function() {
        return foregroundColor;
      },
      setBackgroundColor: function(color) {
        backgroundColor = color;
        $rootScope.$broadcast('redrawCanvas');
      },
      getBackgroundColor: function() {
        return backgroundColor;
      },

      getDrawViewModifier: function() {
        return drawViewModifier;
      },

    };
  }]);
