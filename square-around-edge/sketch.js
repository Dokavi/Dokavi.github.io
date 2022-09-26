// Square Around Edge
// Doan Khanh Vinh
// Sept 26, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 100;
let x = 0; 
let y = 0;
let speed =10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawSquare();
  movingAroundEdge();
}

function drawSquare() {
  square(x,y,squareSize);
}

function movingAroundEdge() {
  if (x>=0 && y <=0 && x<=windowWidth-squareSize) {
    y = 0;
    x+=speed;
  }
  else if (x>=windowWidth-squareSize && y>=0 && y<=windowHeight-squareSize) {
    x = windowWidth - squareSize;
    y+=speed;
  }
  else if (x<=windowWidth-squareSize && y>=windowHeight-squareSize && x>=0) {
    y = windowHeight - squareSize;
    x-=speed;
  }
  else if (x<=0 && y<=windowHeight-squareSize && y>=0) {
    x = 0;
    y-=speed;
  }
}