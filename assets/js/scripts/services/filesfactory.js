'use strict';

/**
 * @ngdoc service
 * @name canvasAppApp.filesFactory
 * @description
 * # filesFactory
 * Factory in the canvasApp.
 */
angular.module('canvasApp')
  .factory('filesFactory', function () {
    // Service logic
    // ...

    var File = function(data){
      this.name = data.fileName;
      this.width = data.fileWidth;
      this.height = data.fileHeight;
      this.layers = [];
    };

    var files =  [];

    var currnetFile = null;

    // Public API here
    return {
      getCurrentFile: function(){
        return currnetFile;
      },

      setCurrentFIle:function(file){
        currnetFile = file;
      },

      getAllFiles: function(){
        return files;
      },

      //watch

      makeFile: function(fileData){
        var newFile = new File(fileData);
        files.push(newFile);
      }
    };
  });
