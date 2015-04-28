var creatorDirectives = angular.module ('creatorDirectives',[]);

creatorDirectives.directive("instrumentTable", function(){
	return{
		restrict:"E",
		templateUrl:"javascripts/creator/directives/tableInstrument.html",
		scope:{
			instrument:"=instrument"
		},
		replace:true,
		controller:function($scope){
			$scope.dragPanel = false;
		},

		link:function(scope, element, attrs){
			$(element).find("td").each(function(index, element){
				$(element).hover(function(){
					$(this).css({"background-color": "#f5f5f5"});
				}, function(){
					$(this).css({"background-color": "white"});
				});
			});

			$(element).find("td").click(function(e){
				$('.instrument-table').find("td").removeClass("active-instrument")
				$(e.currentTarget).addClass("active-instrument");
				scope.$apply(function(){
					scope.instrument = (e.currentTarget).id;
				});
			});

		}
	}
})


creatorDirectives.directive("draw", function(){
	return{
		restrict:"A",		
		scope:{
			instrument:"=instrument",
			layer:"=layer"
		},
		
		controller:function($scope){
		},

		link: function(scope, element, attrs){
			scope.layer.makeCtx(element);
			var mouseDown = null;
			element.mousedown(function(e){
				console.log("layer", e.offsetX);
				mouseDown = true;								
			});

			element.mouseup(function(e){				
				mouseDown = false;							
			});

			element.mousemove(function(e){
				if(scope.instrument === "pencil" && mouseDown){
					drawCircle(scope.layer.context ,e.offsetX, e.offsetY, 1, true);
				}	
			})

			
		}

	}
})


creatorDirectives.directive("layerTable", function(){
	return{
		restrict:"E",
		scope:false,
		templateUrl:"javascripts/creator/directives/layerTable.html"
	}
})
