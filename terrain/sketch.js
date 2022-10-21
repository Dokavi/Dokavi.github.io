// Terrain Generation
// Doan Khanh vinh
// Oct 21,2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeights = [];
let startingLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(20000);
}

function draw() {
  background(220);
  for (let i = startingLocation; i<startingLocation+width;i++) {
    drawRect(i-startingLocation,theHeights[i],1);
  }
  if (keyIsPressed) {
    startingLocation+=5;
  }
}

function generateHeights(howMany) {
  let tempArray = [];
  let time = random(10000);
  for (let i = 0; i<howMany;i++) {
    tempArray.push(noise(time)*height);
    time +=0.001;
  }
  return tempArray;
}

function drawRect(x,rectHeight,rectWidth) {
  let y = height - rectHeight;
  rect(x,y,rectWidth,rectHeight);
}