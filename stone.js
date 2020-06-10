function Stone() {

	this.x = random(25, width-25);
	this.y = -25;
	this.speed = createVector(random(-1, 1), random(4, 10));
	this.size = random(75, 125);
	this.colour = color(random(0, 255), random(0, 255), random(0, 255));

	this.update = function() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}

	this.show = function() {
		fill(this.colour);
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.reset = function() {
		this.x = random(25, width-25);
		this.y = -25;
		this.speed = createVector(random(-1, 1), random(4, 10));
		this.size = random(75, 125);
		this.colour = color(random(0, 255), random(0, 255), random(0, 255));
	}

	this.check = function() {
	if (this.y - this.size/2 > height) {
		this.reset();
	}
	if (this.x - this.size/2 < 0) {
		this.speed.x *= -1;
	} else if (this.x + this.size/2 > width) {
		this.speed.x *= -1;
	}
	if (dist(this.x, this.y, ball.x, ball.y) < 25 + (this.size/2)) {
		game = false;
	}
	}
	
}