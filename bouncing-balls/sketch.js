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
  bounceBall();
}

function mousePressed() {
  spawnCircle();
}
function displayCircles() {
  for (let thisCirle of theCircle) {
    noStroke();
    fill(thisCirle.theColor);
    circle(thisCirle.x,thisCirle.y,thisCirle.radius*2);
  }
}

function spawnCircle() {
  let thisCircle ={
    x: mouseX,
    y: mouseY,
    radius: 50,
    theColor: color(random(255),random(255),random(255),random(255)),
    xVelocity: random(-5,5),
    yVelocity: random(-5,5)
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
    if (theCircle[i].x +theCircle[i].radius >=width || theCircle[i].x - theCircle[i].radius<=0) {
      theCircle[i].xVelocity *=-1;
    }
    if (theCircle[i].y +theCircle[i].radius >=height || theCircle[i].y -theCircle[i].radius <=0) {
      theCircle[i].yVelocity *=-1;
    }
  }
}

function bounceBall() {
  let collisionArray = [...theCircle];
  for (let i = 0; i < theCircle.length; i++) {
    let a = collisionArray.shift(collisionArray[i]);
    for (let cirlceCheck of collisionArray) {
      let hit = collideCircleCircle(a.x,a.y,a.radius*2,cirlceCheck.x,cirlceCheck.y,cirlceCheck.radius*2);
      if (hit) {
        a.xVelocity *=-1;a.yVelocity *=-1;
      }
      collisionArray.unshift(collisionArray[i]);
    }
  }
}