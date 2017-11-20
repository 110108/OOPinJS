let bubbles=[];
let player;
let gamestate;
let timer;
let score;

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas((windowWidth-20), (windowHeight-20));
	for(let i=0; i<random(10,500); i++){
		let x=random(10,(width-10));
		let y=random(height);
		let r=random(10,50);
		let b=new Bubble(x, y, r);
		bubbles.push(b);

	}
	player=new ship(0,0);
	gamestate="title";
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	if(gamestate=="title"){
		timer=6000;
		score=0;
		//print title W/ epilepsy warning
	}
	else if(gamestate=="ingame"){
		for (let i=0; i<bubbles.length; i++){
			bubbles[i].move();
			bubbles[i].show();
			bubbles[i].checkY(windowHeight-20);
			bubbles[i].checkX(windowWidth-20);
		}

		text((timer/100)+"seconds",50,40)
		timer--;

		player.move();
	 	player.show();

		if(timer==0&&score>10){
			gamestate="win";
		}
		else if (timer==0&&score<10){
			gamestate="loss";
		}
	}

	else if(gamestate=="loss"){
		//print loss screen
	}

	else if(gamestate=="win"){
		//print win screen
	}
}

function mousePressed(){
	if(gamestate=="title"){
		gamestate="ingame";
	}
	else if(gamestate=="loss"){
		gamestate="title";
	}
	else if (gamestate=="win") {
		gamestate="title";
	}
	else if(gamestate=="ingame"){

	}
}

class ship {
	constructor(x,y){
		this.x=x;
		this.y=y;
	}

	move(){
		this.x=mouseX;
		this.y=(windowHeight-45);
	}

	show(){
		stroke(255); // white outline
		strokeWeight(1); // line width
		fill(random(10,255),0,0);
		triangle((this.x-20), (this.y+10), (this.x), (this.y-10), (this.x+20), (this.y+10));
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
		this.y = this.y + random(0,15);
	}

	show() {
		stroke(255); // white outline
		strokeWeight(4); // line width
		fill(random(0,100),random(1,255),random(1,255));
		ellipse(this.x, this.y, this.r, this.r);
	}

		checkY(h) {
			if(this.y>h){
				this.y=10;
			}
		}

		checkX(w){
			if(this.x<0){
				this.x+=5;
			}

			else if(this.x>w){
				this.x-=5
			}
		}
}
