// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 60;
let y = 60;
let characterSpeed = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  firstObject();
}

function firstObject() {
  square(x,y,300);
  fill("red");
}

function movingWASD() {
  if (keyIsDown(65)) {
    x -=characterSpeed;
  } // key A move left
  if (keyIsDown(68)) {
    x +=characterSpeed;
  } // key D move right
  if (keyIsDown(87)) {
    y -=characterSpeed;
  } // key W move up
  if (keyIsDown(83)) {
    y +=characterSpeed;
  } // key S move down
}