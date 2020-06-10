function Ball() {
	this.size = 50;
	this.update = function() {
		this.x = mouseX;
		this.y = height - this.size/2;
	}

	this.show = function() {
		fill(255, 255, 0);
		ellipse(this.x, this.y, this.size, this.size);
	}
}
