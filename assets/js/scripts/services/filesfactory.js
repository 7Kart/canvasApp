'use strict';

/**
 * @ngdoc service
 * @name canvasAppApp.filesFactory
 * @description
 * # filesFactory
 * Factory in the canvasAppApp.
 */
angular.module('canvasAppApp')
  .factory('filesFactory', function () {
    // Service logic
    // ...

    var files =  [];

    var currnetFile = null;

    // Public API here
    return {
      getCurrentFile: function(){
        return currnetFile;
      },

      getAllFiles: function(){
        return files;
      },

      makeFile: function(fileData){
        files.push(fileData);
      }
    };
  });
