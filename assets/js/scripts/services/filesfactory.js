'use strict';

/**
 * @ngdoc service
 * @name canvasAppApp.filesFactory
 * @description
 * # filesFactory
 * Factory in the canvasApp.
 */
angular.module('canvasApp')
  .factory('filesFactory', function ($rootScope) {
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

    // Public API here
    return {

      getAllFiles: function(){
        return files;
      },

      makeFile: function(fileData){
        var newFileId = makeId(files);
        var newFile = new File(newFileId, fileData);
        files.push(newFile);

      }
    };
  });
