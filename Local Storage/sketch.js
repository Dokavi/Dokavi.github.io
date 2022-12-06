// Local Storage Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberOfClick = 0;
let highestEver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscore") !== null) {
    highestEver = getItem("highscore");
  }
  else {
    storeItem("highscore",0);
  }
}

function draw() {
  background(220);
  fill("black");
  text(numberOfClick, width/2-50, height/2);
  textSize(150);
  fill("red");
  text(highestEver, 50, height -100);
}

function mousePressed() {
  numberOfClick++;
  if (numberOfClick > getItem("highscore")) {
    storeItem("highscore", numberOfClick);
    highestEver = numberOfClick;
  }
}