(function(window) {

	function Ship() {
		this.initialize();
	}

	var shape;

	Ship.prototype = new Container();
	Ship.prototype.Container_initialize = Ship.prototype.initialize;

	Ship.prototype.initialize = function() {
		this.Container_initialize();

		shape = new Shape();
		shape.graphics.setStrokeStyle(1); 
		this.addChild(shape);
		this.drawIt(false);
	}

	Ship.prototype.drawIt = function(showFlame) {
		shape.graphics.clear();
		shape.graphics.beginStroke("#FFF");
		shape.graphics.moveTo(10, 0);
		shape.graphics.lineTo(-10, 10);
		shape.graphics.lineTo(-5, 0);
		shape.graphics.lineTo(-10, -10);
		shape.graphics.lineTo(10, 0); 

		if (showFlame) {
			shape.graphics.moveTo(-7.5, -5)
			shape.graphics.lineTo(-15, 0);
			shape.graphics.lineTo(-7.5, 5);
		}
	}

	window.Ship = Ship;

}(window));