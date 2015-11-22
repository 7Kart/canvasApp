'use strict';

/**
 * @ngdoc service
 * @name canvasApp.DrawerUtils
 * @description
 * # DrawerUtils
 * Service in the canvasApp.
 */
angular.module('canvasApp')
    .service('DrawerUtils', ['DrawerShapesFactory', 'DrawerState', function (DrawerShapesFactory, DrawerState) {

        //
        //  This is temp implementation, need to move this to files/layers later
        //

        var that = this;

        this.shapes = [];

        this.onChangeShapesCallbacks = [];
        this.onChangeShapes = function (callback) {
            that.onChangeShapesCallbacks.push(callback);
        };
        var fireChangedShapes = function() {
            for (var i in that.onChangeShapesCallbacks) {
                that.onChangeShapesCallbacks[i](that.shapes);
            }
        };

        this.getShapes = function () {
            return that.shapes;
        };

        this.newRectangle = function () {
            var shape = DrawerShapesFactory.createRectangle({
                x: 0,
                y: 0,
                height: 0,
                width: 0,
                color: DrawerState.getForegroundColor(),
                bgColor: DrawerState.getBackgroundColor()
            });
            return shape;
        };

        this.newLine = function () {
            var shape = DrawerShapesFactory.createLine({
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                color: DrawerState.getForegroundColor()
            });
            return shape;
        };

        this.addShape = function(shape) {
            this.shapes.push(shape);
            fireChangedShapes();
        };

    }]);
