'use strict';

/**
 * @ngdoc service
 * @name canvasApp.DrawerState
 * @description
 * # DrawerState
 * Factory in the canvasAppApp.
 */
angular.module('canvasApp')
  .factory('DrawerState', function () {

    var currentTool = null;
    var zoom = 1.0;
    var foregroundColor = '#ecd6ae';
    var backgroundColor = '#e3efd5';
    var currentFileId = null;
    var currentLayerId = null;
    var currentObjectId = null;

    // Public API here
    return {

      getCurrentFileId: function(){
        console.log("getCurrentFileId",currentFileId);
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
        zoom = newZoom;
      },
      incZoom: function(incZoom) {
        if (zoom + incZoom > 0 && zoom + incZoom < 2) {
          zoom += incZoom;
          zoom = parseInt(zoom * 100) / 100;
        }
        return zoom;
      },

      setForegroundColor: function(color) {
        foregroundColor = color;
      },
      getForegroundColor: function() {
        return foregroundColor;
      },
      setBackgroundColor: function(color) {
        backgroundColor = color;
      },
      getBackgroundColor: function() {
        return backgroundColor;
      },


    };
  });
