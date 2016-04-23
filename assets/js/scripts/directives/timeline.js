angular.module('canvasApp')
  .directive("timeLine", ["DrawerState", "filesFactory", "timeLineService", function(DrawerState, filesFactory, timeLineService){
    return{
      restrict: 'A',
      templateUrl:"jspartials/directive/dirTimeLine.html",
      scope:{
        timeRange:"=timeRange",
        file:"=file"
      },

      controller: function($scope){

        $scope.makeNumberArray = timeLineService.makeNumberArray;

      },

      link: function($scope, element, attrs){
        var id = null;
        element.on("mousedown", "th", function(e){
          var id = e.currentTarget.id;
          if(id == $scope.file.currentTime){
            element.on("mouseover", "th", function(e){
              newId = e.currentTarget.id;
              $scope.$apply(function(){
                $scope.file.currentTime = newId;
              });
            });
          }
        });
        element.on("mouseup", function(e){
          element.off("mouseover", "th");
        });
        element.on("mouseleave", function(e){
          element.off("mouseover", "th");
        });
      }
    }
  }]);
