(function(window) {

	function Ball(radius, color) {
		this.initialize(radius, color);
	}

	Ball.prototype = new Container();

	Ball.prototype.radius;
	Ball.prototype.color;

	Ball.prototype.Container_initialize = Ball.prototype.initialize;

	Ball.prototype.initialize = function(radius, color) {
		this.Container_initialize();

		if (!radius) radius = 40;
		if (!color) color = "#F00";

		this.radius = radius;
		this.color = color;

		var shape = new Shape();
		shape.graphics.beginFill(color);
		shape.graphics.drawCircle(0, 0, radius);
		this.addChild(shape);
	}

	window.Ball = Ball;

}(window));