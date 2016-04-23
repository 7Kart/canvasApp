'use strict';

/**
 * @ngdoc service
 * @name canvasApp.layersFactory
 * @description
 * # layersFactory
 * Factory in the canvasApp.
 */

angular.module('canvasApp')
  .service('interfaceServ', function (_) {

    this.activeLayer = function(layer, activeLayer){
      if (layer == activeLayer)
        return  true;
      return false;
    }

  })
