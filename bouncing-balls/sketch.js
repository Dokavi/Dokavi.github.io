// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let theCircle = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
//   displayCircles();
//   move();
// }

// function mousePressed() {
//   spawnCircle();
// }
// function displayCircles() {
//   for (let thisCirle of theCircle) {
//     noStroke();
//     fill(thisCirle.theColor);
//     circle(thisCirle.x,thisCirle.y,thisCirle.radius*2);
//   }
// }

// function spawnCircle() {
//   let thisCircle ={
//     x: mouseX,
//     y: mouseY,
//     radius: 50,
//     theColor: color(random(255),random(255),random(255),random(255)),
//     xVelocity: random(-5,5),
//     yVelocity: random(-5,5)
//   };
//   theCircle.push(thisCircle);
// }


// function move() {
//   for (let i=0; i<theCircle.length; i++) {
//     theCircle[i].x += theCircle[i].dx;
//     theCircle[i].y += theCircle[i].dy;

//     //collision check
//     for (let j=0; j<theCircle.length; j++) {
//       if (i !== j) { //don't check if hitting self
//         if (isColliding(theCircle[i], theCircle[j])) {
//           //swap the speeds
//           let tempDx = theCircle[i].dx;
//           let tempDy = theCircle[i].dy;
//           theCircle[i].dx = theCircle[j].dx;
//           theCircle[i].dy = theCircle[j].dy;
//           theCircle[j].dx = tempDx;
//           theCircle[j].dy = tempDy;
//         }
//       }
//     }

//     //left-right edges
//     if (theCircle[i].x + theCircle[i].radius > width ||
//        theCircle[i].x - theCircle[i].radius < 0) {
//       theCircle[i].dx *= -1;
//     }

//     //top-bottom edges
//     if (theCircle[i].y + theCircle[i].radius > height || 
//       theCircle[i].y - theCircle[i].radius < 0) {
//       theCircle[i].dy *= -1;
//     }
//   }
// }

// // function moveBall() {
// //   for (let i = 0; i < theCircle.length; i++) {
// //     let a = theCircle.shift(theCircle[i]);
// //     for (let cirlceCheck of theCircle) {
// //       hit = collideCircleCircle(theCircle[i].x,theCircle[i].y,theCircle[i].radius*2,cirlceCheck.x,cirlceCheck.y,cirlceCheck.radius*2);
// //       if (hit) {
// //         a.xVelocity *=-1;a.yVelocity *=-1;
// //       }
// //       theCircle.unshift(theCircle[i]);
// //       hit = false;
// //     }
// //   }
// // }

// function isColliding(ball1, ball2) {
//   let distanceBetween = dist(ball1.x, ball1.y, ball2.x, ball2.y);
//   let radiiSum = ball1.radius + ball2.radius;
//   if (distanceBetween > radiiSum) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }
let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  theCircles.push(spawnBall(100, 100));
}

function draw() {
  background(220);

  //move
  for (let i=0; i<theCircles.length; i++) {
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;

    //collision check
    for (let j=0; j<theCircles.length; j++) {
      if (i !== j) { //don't check if hitting self
        if (isColliding(theCircles[i], theCircles[j])) {
          //swap the speeds
          let tempDx = theCircles[i].dx;
          let tempDy = theCircles[i].dy;
          theCircles[i].dx = theCircles[j].dx;
          theCircles[i].dy = theCircles[j].dy;
          theCircles[j].dx = tempDx;
          theCircles[j].dy = tempDy;
        }
      }
    }

    //left-right edges
    if (theCircles[i].x + theCircles[i].radius > width ||
       theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
    }

    //top-bottom edges
    if (theCircles[i].y + theCircles[i].radius > height || 
      theCircles[i].y - theCircles[i].radius < 0) {
      theCircles[i].dy *= -1;
    }
  }
  
  //display
  for (let thisCircle of theCircles) {
    fill(thisCircle.theColor);
    noStroke();
    circle(thisCircle.x, thisCircle.y, thisCircle.radius*2);
  }
}

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

function mousePressed() {
  theCircles.push(spawnBall(mouseX, mouseY));
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX, 
    y: tempY,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColor: color(random(255), random(255), random(255), random(255))
  };
  return newBall;
}