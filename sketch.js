let bubbles = [];

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(640, 480);
	let x=random(width);
	let y=random(height);
}

/*function mouseDragged() {
	let r=random(10, 50);
	let b=new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}*/


function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for (let i=0; i<bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble {
	constructor(x,y,r) {
		this.x=x;
		this.y=y;
		this.r=r;
	}

	move() {
	this.x = this.x + random(-5,5);
	this.y = this.y + random(-5,5);
	}

	show() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	noFill();
	ellipse(this.x, this.y, this.r, this.r); // draw an ellipse/circle
	}
}
//2.30