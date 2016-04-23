'use strict';

/**
 * @ngdoc service
 * @name canvasApp.DrawerUtils
 * @description
 * # DrawerUtils
 * Service in the canvasApp.
 */
angular.module('canvasApp')
    .service('DrawerUtils', ['DrawerShapesFactory', 'DrawerState', '$rootScope', 'layersFactory', 'filesFactory', function (DrawerShapesFactory, DrawerState, $rootScope, layersFactory, filesFactory) {

        //
        //  This is temp implementation, need to move this to files/layers later
        //

        var that = this;

        this.shapes = [];

        this.makeId = function(array){
          var id =  array.length;
          for(var ell=0; ell<array.length; ell++){
            if(id==array[ell].id){
              ell = 0;
              id++;
            }
          }
          return id;
        };

        this.onChangeShapesCallbacks = [];

        this.onChangeShapes = function(callback, layer){
          layer.onChangeShapesCallbacks.push(callback);
        }

        var fireChangedShapes = function(layer) {
            for (var i in layer.onChangeShapesCallbacks) {
                layer.onChangeShapesCallbacks[i](layer.shapes);
            }
        };

        this.getShapes = function (layers) {

          var shapes = [];
          layers.filter(function(layer){
            return layer.visible == true;
          }).forEach(function(layer){
              shapes = shapes.concat(layer.shapes);
          });
          return shapes;
        };

        this.newRectangle = function () {
            var shape = DrawerShapesFactory.createRectangle({
                x: 0,
                y: 0,
                height: 0,
                width: 0,
                borderWidth: 1,
                color: DrawerState.getForegroundColor(),
                bgColor: DrawerState.getBackgroundColor(),
                layer: layersFactory.getLayerById(filesFactory.getFilesLayers(DrawerState.getCurrentFileId()) ,DrawerState.getCurrentLayerId())
            });
            return shape;
        };

        this.newLine = function () {
            var shape = DrawerShapesFactory.createLine({
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                borderWidth: 1,
                color: DrawerState.getForegroundColor(),
                layer: layersFactory.getLayerById(filesFactory.getFilesLayers(DrawerState.getCurrentFileId()) ,DrawerState.getCurrentLayerId())
            });
            return shape;
        };

        this.addShape = function(shape, layer) {
            $rootScope.$apply(function(){
              layer.shapes.push(shape);
              fireChangedShapes(layer);
            });
        };

    }]);
