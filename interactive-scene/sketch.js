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
let groundCoordinate = 500;
let jump = 15;
let groundLength = 3000;
let jumpButton = true;
function preload() {

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 -characterSize;
  y = height/2 -characterSize;
}

function draw() {
  background(220);
  camera2D();
  drawLine();
  firstObject();
}

function firstObject() {
  square(x,y,characterSize);
  fill("red");
  movingWASD();
  jumping();
  gravity();
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
  vertex(0,groundCoordinate);
  vertex(groundLength,groundCoordinate);
  endShape();
  beginShape();
  for (let i=0;i<100;i+=3) {
    vertex(i*10,300 );
    vertex((i+1)*10,200 );
    vertex((i+2)*10,300);
  }
  endShape();
}

function camera2D() {
  translate(width/2-x,height/2-y);
} //center the character

function gravity() {
  if (y <groundCoordinate-characterSize) {
    y +=5;
  }
  else if (y >groundCoordinate-characterSize) {
    y = groundCoordinate-characterSize;
  }
}


function jumping() {
  if (keyIsDown(32)) {
    y-=jump;
  } //key space jump
}

function jumpTimer() {
  setInterval(function(){
    jumpButton = false,2000;
  });
}