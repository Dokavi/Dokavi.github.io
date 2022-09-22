// Image Demo
// Doan Khanh Vinh
// 11:37 AM 9/22/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let fishImage;
let scalar = 0.5;
function preload() {
  fishImage = loadImage("Fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(fishImage,width/2,height/2,fishImage.width*scalar, fishImage.height*scalar);
}

function keyPressed() {
  if (keyCode === 87) {
    scalar *= 1.5;
  }
  if (keyCode === 83) {
    scalar *= 0.75;
  }
}
