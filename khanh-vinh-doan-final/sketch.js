// Project Title
// Doan Khanh Vinh
// Date
//
// Extra for Experts:
// firework balls : whenever you deletes a ball, create a firework
// fake shooting star : press "u" to shoot, although the animation is squishy and failed

let balls = [];
let animationBalls = [];
let discards;

class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-5,5);
    this.ySpeed = random(-5,5);
    this.diameter = 50;
    this.color = color(random(255),random(255),random(255));
  }

  display() {
    fill(this.color);
    circle(this.x,this.y,this.diameter);
  }

  move() {
    this.x +=this.xSpeed;
    this.y +=this.ySpeed;
    if (this.x <=0 + this.diameter/2 || this.x >= windowWidth-this.diameter/2) {
      this.xSpeed*=-1;
    }
    if (this.y <=0 + this.diameter/2 || this.y >= windowHeight-this.diameter/2) {
      this.ySpeed*=-1;
    }
  }

  checkIfInsideBall(x,y) {
    if (x >= this.x - this.diameter/2 && x <= this.x +this.diameter/2 && y >= this.y - this.diameter/2 && y <= this.y +this.diameter/2) {
      return true;
    }
  }
  
}

class Smallball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-10,10);
    this.ySpeed = random(-10,10);
    this.diameter = 5;
    this.alpha = 255;
    this.color = color(255,0,0,this.alpha);
  }

  display() {
    fill(this.color);
    circle(this.x,this.y,this.diameter);
  }

  update() {
    this.x +=this.xSpeed;
    this.y +=this.ySpeed;
    if (this.x <=0 + this.diameter/2 || this.x >= windowWidth-this.diameter/2) {
      this.xSpeed*=-1;
    }
    if (this.y <=0 + this.diameter/2 || this.y >= windowHeight-this.diameter/2) {
      this.ySpeed*=-1;
    }
    this.alpha-=15;
  }

  checkIfDead() {
    if (this.alpha <=0) {
      return true;
    } 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0;i<5;i++) {
    let newBall = new Ball(random(0,width),random(0,height));
    balls.push(newBall);
  }
}

function draw() {
  background(0);
  for (let i = 0; i<=balls.length-1;i++) {
    balls[i].display();
    balls[i].move();
  }
  for (let j = 0; j<=animationBalls.length-1;j++) {
    animationBalls[j].display();
    animationBalls[j].update();
    if (animationBalls[j].checkIfDead()) {
      discards = animationBalls.splice(j,1);
    }
  }
}

function keyPressed() {
  let newBall = new Ball(random(0,width),random(0,height));
  balls.push(newBall);
  if (key === "u") {
    shootingStar();
  }
}

function mousePressed() {
  for (let i = 0; i<=balls.length-1;i++) {
    if (balls[i].checkIfInsideBall(mouseX,mouseY)) {
      deadAnimation();
      discards = balls.splice(i,1);
    }
  }
}

function deadAnimation() {
  for (let j = 0; j <= 30;j++) {
    let ball2 = new Smallball(mouseX,mouseY);
    animationBalls.push(ball2);
  }
}

function shootingStar() {
  for (let j = 0; j <= 30;j++) {
    let ball2 = new Smallball(mouseX,mouseY);
    ball2.x = random(0,width);
    ball2.y = 0;
    ball2.xSpeed = random(0,15);
    ball2.ySpeed = 15;
    ball2.alpha = 800;
    ball2.color = "lightblue";
    animationBalls.push(ball2);
  }
}