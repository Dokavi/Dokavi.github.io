// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x,y,theImage) {
    this.x = x;
    this.y = y+20;
    this.size = 0.8;
    this.dx = 5;
    this.img = theImage;
  }
  move() {
    this.x +=this.dx;
  }
  display() {
    image(this.img,this.x,this.y,this.img.width*this.size,this.img.height*this.size);
  }
  isDead() {
    return this.x <=0 || this.x >= width;
  }
}
let person = {
  x:100,
  y:0
};
let bulletsCase = [];
let characterImage;
let arrow;

function preload() {
  characterImage = loadImage("anubis_guard.png");
  arrow = loadImage("arrow_2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  person.y = height -100;
}

function draw() {
  background(220);
  image(characterImage,person.x,person.y,50,50);
  for (let i = 0; i<bulletsCase.length;i++) {
    bulletsCase[i].move();
    bulletsCase[i].display();
  }
  for (let i = bulletsCase.length-1;i>=0;i--) {
    if (bulletsCase[i].isDead()) {
      bulletsCase.splice(i,1);
    }
  }
}

function mousePressed() {
  let bulletShot = new Bullet(person.x,person.y,arrow);
  bulletsCase.push(bulletShot);
}
