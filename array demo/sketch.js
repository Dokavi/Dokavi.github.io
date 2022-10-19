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
    radius: random(25,75),
    theColor: color(random(255),random(255),random(255))
  };
  theCircle.push(thisCircle);
}