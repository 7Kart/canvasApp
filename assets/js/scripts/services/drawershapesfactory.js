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
            this.type = 'rectangle';
            this.x = info.x;
            this.y = info.y;
            this.width = info.width;
            this.height = info.height;
            this.color = info.color;
            this.bgColor = info.bgColor;
            this.borderWidth = info.borderWidth;

            this.draw = function(domCtx, drawModifier, basePoint) {
                domCtx.fillStyle = this.bgColor;
                var x = drawModifier.modifyXCoordinate(this.x) + basePoint.x;
                var y = drawModifier.modifyYCoordinate(this.y) + basePoint.y;
                var width = drawModifier.modifyMetric(this.width);
                var height = drawModifier.modifyMetric(this.height);
                domCtx.fillRect(
                    x,
                    y,
                    width,
                    height
                );
                domCtx.lineWidth = this.borderWidth;
                domCtx.strokeStyle = this.color;
                domCtx.strokeRect(x, y, width, height);
            };

            this.setCoordByMouseMove = function(x1, y1, x2, y2) {
                this.x = Math.min(x1, x2);
                this.y = Math.min(y1, y2);
                this.width = Math.abs(x1 - x2);
                this.height = Math.abs(y1 - y2);
            };
        };

        var LineShape = function(info) {
            this.type = 'line';
            this.x1 = info.x1;
            this.y1 = info.y1;
            this.x2 = info.x2;
            this.y2 = info.y2;
            this.color = info.color;
            this.lineWidth = info.lineWidth;
            this.draw = function(domCtx, drawModifier, basePoint) {
                domCtx.beginPath();
                domCtx.moveTo(
                    drawModifier.modifyXCoordinate(this.x1) + basePoint.x,
                    drawModifier.modifyYCoordinate(this.y1) + basePoint.y
                );
                domCtx.lineTo(
                    drawModifier.modifyXCoordinate(this.x2) + basePoint.x,
                    drawModifier.modifyYCoordinate(this.y2) + basePoint.y
                );
                domCtx.lineWidth = this.lineWidth;
                domCtx.strokeStyle = this.color;
                domCtx.stroke();
            };
            this.setCoordByMouseMove = function(x1, y1, x2, y2) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
            }
        };

        // Public API here
        return {
            createRectangle: function(info){
                return new RectangleShape(info);
            },
            createLine: function(info){
                return new LineShape(info);
            }
        };
    });
