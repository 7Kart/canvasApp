'use strict';

/**
 * @ngdoc function
 * @name canvasAppApp.controller:DrawtoolboxctrlCtrl
 * @description
 * # DrawtoolboxctrlCtrl
 * Controller of the canvasAppApp
 */
angular.module('canvasApp')
    .controller('DrawPropertiesCtrl', ['$scope', '$rootScope', 'DrawerUtils', function ($scope, $rootScope, DrawerUtils) {

        $scope.currentShapeIndex = -1;
        $scope.shapes = [];
        DrawerUtils.onChangeShapes(function(shapes){
            $scope.$apply(function(){
                $scope.shapes = DrawerUtils.getShapes();
                $scope.currentShapeIndex = $scope.shapes.length - 1;
            });
        });

        $scope.nextShape = function() {
            $scope.currentShapeIndex += 1;
            if ($scope.currentShapeIndex >= $scope.shapes.length) {
                $scope.currentShapeIndex = 0;
            }
        };
        $scope.prevShape = function() {
            $scope.currentShapeIndex -= 1;
            if ($scope.currentShapeIndex < 0) {
                $scope.currentShapeIndex = $scope.shapes.length - 1;
            }
        };

        $scope.getCurrentShape = function() {
            if ($scope.shapes.length > 0) {
                if (-1 == $scope.currentShapeIndex) {
                    $scope.currentShapeIndex = 0;
                }
                return $scope.shapes[$scope.currentShapeIndex];
            } else {
                return null;
            }
        };

        $scope.firePropertyModified = function() {
            $rootScope.$broadcast('redrawCanvas');
        };

        $scope.getCurrentShapeType = function() {
            if ($scope.shapes.length > 0) {
                return this.getCurrentShape().type;
            } else {
                return null;
            }
        };

    }]);
