'use strict';

/**
 * @ngdoc service
 * @name canvasAppApp.DrawerState
 * @description
 * # DrawerState
 * Factory in the canvasAppApp.
 */
angular.module('canvasApp')
  .factory('DrawerState', function () {

    var currentTool = 'None';

    // Public API here
    return {
      getCurrentTool: function () {
        return currentTool;
      },
      setCurrentTool: function (newTool) {
        currentTool = newTool;
      }
    };
  });
