// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.dx = random(random(-3,0),random(0,3));
    this.dy = random(random(-3,0),random(0,3));
    this.alpha = 255;
    this.r = random(200);
    this.g = random(100);
    this.b = random(255);
    this.color = color(this.r,this.g,this.b,this.alpha);
    this.radius = 0.5;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.alpha--;
    this.color = color(this.r,this.g,this.b,this.alpha);
  }
  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x,this.y,this.radius*2);
  }

  isDead() {
    return this.alpha <= 0;
  }
}

let theFireWorks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i< theFireWorks.length;i++) {
    theFireWorks[i].update();
    if (theFireWorks[i].isDead()) {
      //remove
      theFireWorks.splice(i,1);
    }
    else {
      theFireWorks[i].display();
    }
  }
}

function mousePressed() {
  for (let i = 0;i<200;i++) {
    let someParticle = new Particle(mouseX,mouseY);
    theFireWorks.push(someParticle);
  }
}