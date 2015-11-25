'use strict';

/**
 * @ngdoc directive
 * @name canvasApp.directive:DrawCanvas
 * @description
 * # DrawCanvas
 */
angular.module('canvasApp')
    .directive('drawCanvas', ['DrawerUtils', 'DrawerState', 'DrawerShapesFactory', function (DrawerUtils, DrawerState, DrawerShapesFactory) {
        return {
            restrict: 'A',
            link: function postLink($scope, element, attrs) {

                var getBasePoint = function() {
                    return {x: element[0].width / 2, y: element[0].height / 2};
                };

                var redrawCanvas = function () {
                    var ctx = element[0].getContext("2d");
                    ctx.clearRect(0, 0, 1000, 1000);

                    // draw center of coordinates
                    DrawerShapesFactory.createLine({x1: -10, y1: 0, x2: 10, y2: 0, color: '#CCC', lineWidth: 1})
                        .draw(ctx, DrawerState.getDrawViewModifier(), getBasePoint());
                    DrawerShapesFactory.createLine({x1: 0, y1: -10, x2: 0, y2: 10, color: '#CCC', lineWidth: 1})
                        .draw(ctx, DrawerState.getDrawViewModifier(), getBasePoint());

                    // draw shapes
                    var shapes = DrawerUtils.getShapes();
                    for (var i in DrawerUtils.getShapes()) {
                        shapes[i].draw(ctx, DrawerState.getDrawViewModifier(), getBasePoint());
                    }

                    return ctx;
                };

                var mouseNewObject = null;
                var mouseStartX = null;
                var mouseStartY = null;
                var mousePressed = false;
                element.bind('mousedown', function (e) {

                    mousePressed = true;

                    var drawViewModifier = DrawerState.getDrawViewModifier();

                    var left = (e.pageX - $(e.currentTarget).offset().left - drawViewModifier.shiftX - getBasePoint().x);
                    var top = (e.pageY - $(e.currentTarget).offset().top - drawViewModifier.shiftY - getBasePoint().y);
                    mouseStartX = ((left) / drawViewModifier.zoom).toFixed(3);
                    mouseStartY = ((top) / drawViewModifier.zoom).toFixed(3);

                    if ('line' == DrawerState.getCurrentTool()) {
                        mouseNewObject = DrawerUtils.newLine(mouseStartX, mouseStartY);
                    } else if ('rectangle' == DrawerState.getCurrentTool()) {
                        mouseNewObject = DrawerUtils.newRectangle(mouseStartX, mouseStartY);
                    }
                });

                element.bind('mousemove', function (e) {
                    if (mousePressed) {
                        var ctx = redrawCanvas();

                        if (mouseNewObject) {
                            var drawViewModifier = DrawerState.getDrawViewModifier();
                            var left = (e.pageX - $(e.currentTarget).offset().left - drawViewModifier.shiftX - getBasePoint().x);
                            var top = (e.pageY - $(e.currentTarget).offset().top - drawViewModifier.shiftY - getBasePoint().y);
                            var mouseCurX = ((left) / drawViewModifier.zoom).toFixed(3);
                            var mouseCurY = ((top) / drawViewModifier.zoom).toFixed(3);

                            mouseNewObject.setCoordByMouseMove(mouseStartX, mouseStartY, mouseCurX, mouseCurY);
                            mouseNewObject.draw(ctx, drawViewModifier, getBasePoint());
                        }
                    }
                });

                element.bind('mouseup', function (e) {
                    if (mouseNewObject) {
                        DrawerUtils.addShape(mouseNewObject);
                    }
                    mousePressed = false;
                    mouseNewObject = null;
                    redrawCanvas();
                });

                element.bind('mouseout', function (e) {
                    mousePressed = false;
                });

                // draw for first time
                redrawCanvas();

                $scope.$on('redrawCanvas', redrawCanvas);

            }
        };
    }]);