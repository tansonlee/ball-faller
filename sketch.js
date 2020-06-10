var game = true

// function Ball() {
// 	this.size = 50;
// 	this.update = function() {
// 		this.x = mouseX;
// 		this.y = height - this.size/2;
// 	}

// 	this.show = function() {
// 		fill(255, 255, 0);
// 		ellipse(this.x, this.y, this.size, this.size);
// 	}
// }

// function Stone() {

// 	this.x = random(25, width-25);
// 	this.y = -25;
// 	this.speed = createVector(random(-1, 1), random(4, 10));
// 	this.size = random(75, 125);
// 	this.colour = color(random(0, 255), random(0, 255), random(0, 255));

// 	this.update = function() {
// 		this.x += this.speed.x;
// 		this.y += this.speed.y;
// 	}

// 	this.show = function() {
// 		fill(this.colour);
// 		ellipse(this.x, this.y, this.size, this.size);
// 	}

// 	this.reset = function() {
// 		this.x = random(25, width-25);
// 		this.y = -25;
// 		this.speed = createVector(random(-1, 1), random(4, 10));
// 		this.size = random(75, 125);
// 		this.colour = color(random(0, 255), random(0, 255), random(0, 255));
// 	}

// 	this.check = function() {
// 	if (this.y - this.size/2 > height) {
// 		this.reset();
// 	}
// 	if (this.x - this.size/2 < 0) {
// 		this.speed.x *= -1;
// 	} else if (this.x + this.size/2 > width) {
// 		this.speed.x *= -1;
// 	}
// 	if (dist(this.x, this.y, ball.x, ball.y) < 25 + (this.size/2)) {
// 		game = false;
// 	}
// 	}
	
	

// }


function setup() {
  	createCanvas(400, 400)
  	stone1 = new Stone;
  	stone2 = new Stone;
  	stone3 = new Stone;
	ball = new Ball;
}


function draw() {
	noStroke();
	background(230, 230, 255);

	if (game) {
		if (ball.x < 25) {
			ball.x = 25;
		} else if (ball.x > width - 25) {
			ball.x = width - 25;
		}

		ball.update();
		ball.show();

		
		stone1.update();
		stone1.show();
		stone1.check();

		stone2.update();
		stone2.show();
		stone2.check();

		stone3.update();
		stone3.show();
		stone3.check();
		} else {

		textAlign(CENTER, CENTER);
		fill(100);
		textSize(50);
		text("YOU LOSE", width/2, (2/float(5)) * height);

		fill(230);
		stroke(0);

		rectMode(CENTER);
		rect(width/2, (2/float(3)) * height, 250, 75, 5);

		noStroke();
		fill(100);
		text("REPLAY", width/2, (2/float(3)) * height);

		noLoop();
	}
}


function mousePressed() {
	if (mouseX > width/2 - 125 && mouseX < width/2 + 125){
		if (mouseY > ((2/float(3)) * height) - 37.5 && mouseY < ((2/float(3)) * height) + 37.5){
			game = true;
			stone1 = new Stone;
  			stone2 = new Stone;
  			stone3 = new Stone;
  			loop();
		}
	}
}
	


