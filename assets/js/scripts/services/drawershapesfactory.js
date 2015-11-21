'use strict';

/**
 * @ngdoc service
 * @name canvasApp.DrawerState
 * @description
 * # DrawerState
 * Factory in the canvasAppApp.
 */
angular.module('canvasApp')
    .factory('DrawerShapesFactory', function () {

        var RectangleShape = function(info) {
            this.x = info.x;
            this.y = info.y;
            this.width = info.width;
            this.height = info.height;
            this.color = info.color;
            this.bgColor = info.bgColor;

            this.draw = function(domCtx, drawModifier) {
                domCtx.fillStyle = this.bgColor;
                domCtx.fillRect(
                    drawModifier.modifyCoordinate(this.x),
                    drawModifier.modifyCoordinate(this.y),
                    drawModifier.modifyCoordinate(this.width),
                    drawModifier.modifyCoordinate(this.height)
                );
            };
        };

        // Public API here
        return {
            createRectangle: function(info){
                return new RectangleShape(info);
            }
        };
    });
