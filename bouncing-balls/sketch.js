// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayCircles();
  moveCircles();
  bounceWall();
}

function mousePressed() {
  spawnCircle();
}
function displayCircles() {
  for (let i = 0; i < theCircle.length; i++) {
    noStroke();
    fill(theCircle[i].theColor);
    circle(theCircle[i].x,theCircle[i].y,theCircle[i].radius*2);
  }
}

function spawnCircle() {
  let thisCircle ={
    x: mouseX,
    y: mouseY,
    radius: 30,
    theColor: color(random(255),random(255),random(255)),
    xVelocity: 2,
    yVelocity: 1.5,
  };
  theCircle.push(thisCircle);
}

function moveCircles() {
  for (let i = 0; i < theCircle.length; i++) {
    theCircle[i].x += theCircle[i].xVelocity;
    theCircle[i].y += theCircle[i].yVelocity;
  }
}

function bounceWall() {
  for (let i = 0; i < theCircle.length; i++) {
    if (theCircle[i].x >=width) {
      theCircle[i].xVelocity *=-1;
    }
    if (theCircle[i].x <=0) {
      theCircle[i].xVelocity *=-1;
    }
    if (theCircle[i].y >=height) {
      theCircle[i].yVelocity *=-1;
    }
    if (theCircle[i].y <=0) {
      theCircle[i].yVelocity *=-1;
    }
  }
}