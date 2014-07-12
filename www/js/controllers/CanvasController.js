//var canvas = angular.module("canvas", []);

app.controller('CanvasController', function($scope, canvasRenderer) {
	'use strict';
	var colors, 
		colorValue, 
		drawArea, 
		context, 
		points, 
		colorNumber, 
		mouseDown,
		startPos,
		endPos,
		createRenderObject,

	    createRenderObject = function() {
	    	var data;
	    	var pointsLength = points.length;
	    	var data = {
	    		Points: points,
                Color: colorValue[colorNumber]
	    	};
	    	return data;
	    };

		$scope.colorCss = "brown";

		$scope.init = function() {
			var offset;

			colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown'];
			colorValue = ['#000000', '#ff0000', '#ff6600', '#fff44f', '#009900', '#0033ee', '#5500ff', '#5e2e0d'];
		    drawArea = document.getElementById("canvas");
		    context = drawArea.getContext("2d");
		    canvasRenderer.setContext(context);
		    offset = 5;
		    points = [];
		    colorNumber = 7;
		    mouseDown = false;
		    startPos = { x: 0, y: 0 };
			endPos = { x: 0, y: 0 };

			drawArea.onmousedown = function(e) {
				var data;

				points.push({
					x: (e.pageX - drawArea.offsetLeft) - offset,
					y: (e.pageY - drawArea.offsetTop) - offset,
					color: colorValue[colorNumber]
				});

				mouseDown = true;

				startPos.x = points[0].x;
				startPos.y = points[0].y;
				endPos.x = points[0].x;
				endPos.y = points[0].y;

				data = createRenderObject();
				canvasRenderer.render(data);
			};

			drawArea.onmousemove = function(e) {
				var x, y, lastPoint, data;

				if (mouseDown) {
					x = (e.pageX - drawArea.offsetLeft) - offset;
					y = (e.pageY - drawArea.offsetTop) - offset;

					points.push({
						x: x,
						y: y,
						color: colorValue[colorNumber]
					});

					lastPoint = points[points.length - 1];
					endPos.x = lastPoint.x;
					endPos.y = lastPoint.y;

					data = createRenderObject();
					canvasRenderer.render(data);		
				}			
			};

			drawArea.onmouseup = function(e) {
				var data;

				mouseDown = false;
				data = createRenderObject();
				canvasRenderer.addToBuffer(data);

				points = [];
				startPos.x = 0;
				startPos.y = 0;
				endPos.x = 0;
				endPos.y = 0;
			};
		}

		$scope.selectColor = function(color) {
			colorNumber = color;
			$scope.colorCss = colors[colorNumber];
		}

		$scope.undo = function () {
			canvasRenderer.undo();

			points = [];
			startPos.x = 0;
			startPos.y = 0;
			endPos.x = 0;
			endPos.y = 0;
		};
});

app.factory('canvasRenderer', function () {
	'use strict';
	var context,
		render,
		buffer = [];

	return {
		addToBuffer: function (data) {
			buffer.push(data);
		},

		render: function (data) {
			var i;

			context.beginPath();					
			context.lineCap = 'round';
			context.strokeStyle = data.Color;
			context.moveTo(data.Points[0].x, data.Points[0].y);
			for (i = 0; i < data.Points.length; i++) {
				context.lineTo(data.Points[i].x, data.Points[i].y);
			}
			context.stroke();
		},

		setContext: function (ctx) {
			context = ctx;
		},

		undo: function () {
			buffer.pop();			
		}
	};
});
