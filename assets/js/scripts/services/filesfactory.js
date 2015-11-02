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

    var File = function(id, data){
      this.id = id;
      this.name = data.fileName;
      this.width = data.fileWidth;
      this.height = data.fileHeight;
      this.layers = [];
    };

    var files =  [];

    function makeId(array){
      var id = array.length;
      for(var ell=0; ell<array.length; ell++){
        if(id==array[ell].id){
          ell = 0;
          id++;
        }
      }
      return id;
    }

    var currentFile = null;

    // Public API here
    return {
      getCurrentFile: function(){
        return currentFile;
      },

      setCurrentFIle:function(file){
        currentFile = file;
      },

      getAllFiles: function(){
        return files;
      },

      makeFile: function(fileData){
        var newFileId = makeId(files);
        var newFile = new File(newFileId, fileData);
        console.log("newFile", newFile);
        files.push(newFile);
      }
    };
  });
