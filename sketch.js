let bubbles=[];

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(windowWidth, windowHeight);
	for(let i=0; i<10; i++){
		let x=random(width);
		let y=random(height);
		let r=random(10,50);
		let b=new Bubble(x, y, r);
		bubbles.push(b);
	}
}


function mouseClicked(){
	for (let i=0; i<bubbles.length; i++){
		bubbles[i].clicked();
	}
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
		//bubbles[i].clicked();
	}
	//bubble.move();
	//bubble.show();
}

class Bubble {
	constructor(x,y,r) {
		this.x=x;
		this.y=y;
		this.r=r;
	}

	clicked() {
		let d=dist(mouseX, mouseY, this.x, this.y);
		if(d<this.r){
			console.log("Clicked On Bubble");
		}
	}

	move() {
	this.x = this.x + random(-5,5);
	this.y = this.y + random(0,5);

	if(this.y==windowHeight){
		this.y=0;
		console.log("y=0")
	}

	if(this.x==windowWidth){
		this.x-=1;
		console.log("x=0")
	}
	}

	show() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	noFill();
	ellipse(this.x, this.y, this.r, this.r); // draw an ellipse/circle
	}
}
//2.30
