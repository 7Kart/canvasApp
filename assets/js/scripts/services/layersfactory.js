'use strict';

/**
 * @ngdoc service
 * @name canvasApp.layersFactory
 * @description
 * # layersFactory
 * Factory in the canvasApp.
 */

angular.module('canvasApp')
  .factory('layersFactory', function ($rootScope, _) {

    var Layers = function(layers, properties){
      this.id = makeId(layers);
      this.name = properties.name;
      this.shapes = [];
      this.onChangeShapesCallbacks = [];
      this.visible = true;
    };

    Layers.prototype.changeVisible = function(){
      this.visible = !this.visible;
      $rootScope.$broadcast('redrawCanvas');
    };

    Layers.prototype.addShape = function(shape){
      this.shapes.push(shape);
    };

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

    return{

      makeLayer: function(layers, properties){
        return new Layers(layers, properties);
      },

      getLayerById:function(layes, layerId){
        return _.findWhere(layes, {id:layerId});
      },

    }

  });
