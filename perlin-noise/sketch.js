// Perlin Noise Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let allCircle = [];



function keyPressed() {
  let ball = {
    x: random(width),
    y: random(height),
    radius: random (50,100),
    time: random(5000),
    theColor: color(random(255),random(255),random(255))
  };
  allCircle.push(ball);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);


  for (let i= 0;i <allCircle.length;i++) {
    allCircle[i].x = noise(allCircle[i].time)*width;
    allCircle[i].y = noise(allCircle[i].time+5000)*height;
    // increase time along noise
    allCircle[i].time+=0.01;
    fill(allCircle[i].theColor);
    circle(allCircle[i].x,allCircle[i].y,allCircle[i].radius*2);
  }
  
}
