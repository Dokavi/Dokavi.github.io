// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircle = [];
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayCircles();
  moveCircles();
  bounce();
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

function bounce() {
  //edges
  for (let i = 0; i < theCircle.length; i++) {
    for (let j=0; j<theCircle.length; j++) {
      if (i !== j) { //don't check if hitting self
        if (isColliding(theCircle[i], theCircle[j])) {
          //swap the speeds
          let tempDx = theCircle[i].dx;
          let tempDy = theCircle[i].dy;
          theCircle[i].dx = theCircle[j].dx;
          theCircle[i].dy = theCircle[j].dy;
          theCircle[j].dx = tempDx;
          theCircle[j].dy = tempDy;
        }
      }
    }
    if (theCircle[i].x +theCircle[i].radius >=width || theCircle[i].x - theCircle[i].radius<=0) {
      theCircle[i].xVelocity *=-1;
    }
    if (theCircle[i].y +theCircle[i].radius >=height || theCircle[i].y -theCircle[i].radius <=0) {
      theCircle[i].yVelocity *=-1;
    }
    //collision check

  }
}

// function bounceBall() {
//   for (let i = 0; i < theCircle.length; i++) {
//     let a = theCircle.shift(theCircle[i]);
//     for (let cirlceCheck of theCircle) {
//       hit = collideCircleCircle(theCircle[i].x,theCircle[i].y,theCircle[i].radius*2,cirlceCheck.x,cirlceCheck.y,cirlceCheck.radius*2);
//       if (hit) {
//         a.xVelocity *=-1;a.yVelocity *=-1;
//       }
//       theCircle.unshift(theCircle[i]);
//       hit = false;
//     }
//   }
// }

function isColliding(ball1, ball2) {
  let distanceBetween = dist(ball1.x, ball1.y, ball2.x, ball2.y);
  let radiiSum = ball1.radius + ball2.radius;
  if (distanceBetween > radiiSum) {
    return false;
  }
  else {
    return true;
  }
}