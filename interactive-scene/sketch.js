// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 60;
let y = 60;
let characterSpeed = 5;
let characterSize = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  firstObject();
  drawLine();
}

function firstObject() {
  square(x,y,characterSize);
  fill("red");
  movingWASD();
  camera2D();
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
  } // key S move downw
}

function drawLine() {
  beginShape();
  for (let i=20; i <1000 ;i+=20) {
    vertex(i,i);
    vertex(i+20,i+30);
  }
  endShape();
}

function camera2D() {
  translate(width/2- x, height/2 - y);
} //center the character