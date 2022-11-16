// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x,y) {
    this.x = x;
    this.y = y+20;
    this.size =5;
    this.dx = 5;
  }
  move() {
    this.x +=this.dx;
  }
  display() {
    circle(this.x,this.y,this.size);
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

function preload() {
  characterImage = loadImage("anubis_guard.png");
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
    if (bulletsCase[i].isDead()) {
      bulletsCase.splice(i,1);
    }
  }
}

function mousePressed() {
  let bulletShot = new Bullet(person.x,person.y);
  bulletsCase.push(bulletShot);
}
