'use strict';

/**
 * @ngdoc service
 * @name canvasAppApp.filesFactory
 * @description
 * # filesFactory
 * Factory in the canvasApp.
 */
angular.module('canvasApp')
  .factory('filesFactory', function (DrawerState, _, layersFactory, $rootScope) {
    // Service logic
    // ...

    var File = function(id, data){
      this.id = id;
      this.name = data.fileName;
      this.width = data.fileWidth;
      this.height = data.fileHeight;
      this.layers = [];
      this.filmTime = null;
      this.currentTime = 0;
    };

    File.prototype.getCUrrentTime = function(){
      return this.currentTime;
    };

    File.prototype.setCurrentTime = function(time){
      this.currentTime = time;
    };

    File.prototype.addLayers = function(layer){
      this.layers.push(layer);
    };

    File.prototype.deleteLayer = function(layerId){
      for(var layerIndex = 0; layerIndex < this.layers.length; layerIndex++){
        if(layerId == this.layers[layerIndex].id)
        {
          this.layers.splice(layerIndex,1);
        }
      }
    }

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

      deleteFile: function(fileId){
        for(var ell=0; ell<files.length; ell++){
          if(fileId == files[ell].id){
            files.splice(ell,1);
          }
        }
      },

      getAllFilesShapes: function(fileId){
        var file = this.getFileById(fileId)
        var shapes = [];
        file.layers.forEach(function(layer){
          shapes = shapes.concat(layer.shapes);
        });
        return shapes;
      },

      makeDefaultFileName:function(){
        return (makeId(files) == 0)?"New file": "New file " + makeId(files);
      },

      getFileById: function(id){
        return _.findWhere(files, {id:id});
      },

      getFilesLayers:function(fileId){
        return _.findWhere(files, {id:fileId}).layers;
      },

      deleteLayer:function(fileId, layerId){
        var file = _.findWhere(files, {id:fileId});
        file.deleteLayer(layerId);
        $rootScope.$broadcast('redrawCanvas');
      },

      getFilesCount: function(){
        return files.length;
      },

      makeFile: function(fileData){
        var newFileId = makeId(files);
        var newFile = new File(newFileId, fileData);
        var layer = layersFactory.makeLayer(newFile.layers,{name:"New layer 1"});
        newFile.layers.push(layer);
        DrawerState.setCurrentLayerId(layer.id);
        files.push(newFile);
        DrawerState.setCurrentFileId(newFile.id);
        console.log("make new file", newFile);
      }
    };
  });
