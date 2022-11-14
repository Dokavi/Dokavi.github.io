// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x=0,y=0) {
    this.x= x,
    this.y= y,
    this.color = "red";
    this.speed = 5;
    this.radius = 2;
  }
  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x,this.y,this.radius*2);
  }
  move() {
    let choice = random(100);
    if (choice<25) {
      //up
      this.y -=this.speed;
    }
    else if (choice<50) {
      //down
      this.y +=this.speed;
    }
    else if (choice<75) {
      //right
      this.x +=this.speed;
    }
    else if (choice<=100) {
      //up
      this.x -=this.speed;
    }
  }
}

let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0;i<20;i++) {
    walkers[i] = new Walker(width/2,height/2);
    walkers[i].color = color(random(255),random(255),random(255));
  }
}

function draw() {
  for (let i = 0;i<20;i++) {
    walkers[i].display();
    walkers[i].move();
  }
}
