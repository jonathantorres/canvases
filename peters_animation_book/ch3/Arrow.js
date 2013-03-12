(function(window) {

	function Arrow() {
		this.initialize();
	}

	Arrow.prototype = new Container();

	Arrow.prototype.Container_initialize = Arrow.prototype.initialize;

	Arrow.prototype.initialize = function() {
		this.Container_initialize();

		var shape = new Shape();
		shape.graphics.setStrokeStyle(1);
		shape.graphics.beginStroke("#FFF");
		shape.graphics.beginFill("#0F0");
		shape.graphics.moveTo(-50, -25);
		shape.graphics.lineTo(0, -25);
		shape.graphics.lineTo(0, -50);
		shape.graphics.lineTo(50, 0);
		shape.graphics.lineTo(0, 50);
		shape.graphics.lineTo(0, 25);
		shape.graphics.lineTo(-50, 25);
		shape.graphics.lineTo(-50, -25);

		this.addChild(shape);
	}

	window.Arrow = Arrow;

}(window));