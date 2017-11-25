let bubbles=[];
let player;
let gamestate;
let timer;
let bg;
let ws;
let ls;

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas((windowWidth-20), (windowHeight-20));
	player=new ship(0,0);
	gamestate="title";
	score=0;
	bg=loadImage("https://cdn.glitch.com/f3153797-32fb-4ded-bb9d-20975e419671%2Fgame-dev-startscreen-01.png?1511628691331");
	ws=loadImage("https://cdn.glitch.com/f3153797-32fb-4ded-bb9d-20975e419671%2Fws.png?1511629985411");
	ls=loadImage("https://cdn.glitch.com/f3153797-32fb-4ded-bb9d-20975e419671%2Fls.png?1511630368173");
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	if(gamestate=="title"){
		background(bg);
		for(let i=0; i<random(5,500); i++){
			let x=random(10,(width-10));
			let y=random(height);
			let r=random(30,50);
			let b=new Bubble(x, y, r);
			bubbles.push(b);
		}
		timer=6000;
	}

	else if(gamestate=="ingame"){
		background(0);
		for (let i=0; i<bubbles.length; i++){
			bubbles[i].move();
			bubbles[i].show();
			bubbles[i].checkY(windowHeight-20);
			bubbles[i].checkX(windowWidth-20);
		}

		for(let i=0; i<bubbles.length; i++){
			let d=dist(bubbles[i].x,bubbles[i].y,player.x,player.y)
			if(d<bubbles[i].r){
				bubbles.splice(i,1)
			}
		}

		text((timer/100)+" seconds",50,40)
		timer--;
		set++;

		player.move();
	 	player.show();

		if (timer==0&&bubbles.length>=0){
			gamestate="loss";
		}
		else if(bubbles.length==0){
			gamestate="win";
		}
	}

	else if(gamestate=="loss"){
		background(ls);
	}

	else if(gamestate=="win"){
		background(ws);
	}
}

function mousePressed(){
	if(gamestate=="start"){
		gamestate="title"
	}
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

	// intersects(that){
	// 	if()
	// }
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
