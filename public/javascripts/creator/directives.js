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
			var mouse = {x:0, y:0};			
			var lastMouse = {x:0, y:0};
			var ppts = [];
			var context = scope.layer.context;


			element.on('mousemove', function(e){
				mouse.x =  (typeof(e.offsetX) !== 'undefined') ? e.offsetX : e.layerX;
				mouse.y = (typeof(e.offsetY) !== 'undefined') ? e.offsetY : e.layerY;
			});

			element.on('mousedown',function(e){
				element.on('mousemove',onPaint);
				mouse.x =  (typeof(e.offsetX) !== 'undefined') ? e.offsetX : e.layerX;
				mouse.y = (typeof(e.offsetY) !== 'undefined') ? e.offsetY : e.layerY;
				ppts.push({x:mouse.x, y:mouse.y});

				onPaint();
			});

			element.on('mouseup', function(e){
				element.off('mousemove', onPaint);
				context.clearRect(0, 0, context.width, context.height);
				ppts = [];
			});

			element.on('mouseleave', function(e){
				context.clearRect(0, 0, context.width, context.height);
				ppts = [];
			});

			function onPaint() {					
				// Saving all the points in an array
				ppts.push({x: mouse.x, y: mouse.y});
							
				context.lineWidth = 1;
				context.lineJoin = 'round';
				context.lineCap = 'round';
				context.strokeStyle = 'blue';
				context.fillStyle = 'blue';

				if (ppts.length < 3) {
					var b = ppts[0];
					context.beginPath();
					//context.moveTo(b.x, b.y);
					//context.lineTo(b.x+50, b.y+50);
					context.arc(b.x, b.y, context.lineWidth / 2, 0, Math.PI * 2, !0);
					context.fill();
					context.closePath();
					
					return;
				}
				
				// Tmp canvas is always cleared up before drawing.
				context.clearRect(0, 0, element.width, element.height);
				
				context.beginPath();
				context.moveTo(ppts[0].x, ppts[0].y);
				
				for (var i = 1; i < ppts.length - 2; i++) {
					var c = (ppts[i].x + ppts[i + 1].x) / 2;
					var d = (ppts[i].y + ppts[i + 1].y) / 2;
					
					context.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
				}
				
				// For the last 2 points
				context.quadraticCurveTo(
					ppts[i].x,
					ppts[i].y,
					ppts[i + 1].x,
					ppts[i + 1].y
				);
				context.stroke();
					
			};
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
