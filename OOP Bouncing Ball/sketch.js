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
//   let this ={
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

// function isColliding(this, ball2) {
//   let distanceBetween = dist(ball1.x, ball1.y, ball2.x, ball2.y);
//   let radiiSum = ball1.radius + ball2.radius;
//   if (distanceBetween > radiiSum) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }

class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.radius = random(25,100);
    this.dx= random(-5, 5);
    this.dy= random(-5, 5);
    this.theColor= color(random(255), random(255), random(255), random(255));
  }
  move() {
    //move
    this.x += this.dx;
    this.y += this.dy;
    //left-right edges
    if (this.x + this.radius > width ||
      this.x - this.radius < 0) {
      this.dx *= -1;
    }

    //top-bottom edges
    if (this.y + this.radius > height || 
     this.y - this.radius < 0) {
      this.dy *= -1;
    }
  }
  display() {
    //display
    fill(this.theColor);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }
  collisionCheck(other) {
    let distanceBetween = dist(this.x, this.y, other.x, other.y);
    let radiiSum = this.radius + other.radius;
    if (distanceBetween < radiiSum) {
      //swap the speeds
      let tempDx = this.dx;
      let tempDy = this.dy;
      this.dx = other.dx;
      this.dy = other.dy;
      other.dx = tempDx;
      other.dy = tempDy;
    }
  }
}

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let someCircle = new Ball(100,100);
  theCircles.push(someCircle);
}

function draw() {
  background(220);
  for (let i =0;i<theCircles.length;i++) {
    theCircles[i].move();
    for (let j =0;j<theCircles.length;j++) {
      if (i !==j) {//don't hit it self
        theCircles[i].collisionCheck(theCircles[j]);
      }
    }
    theCircles[i].display();
  }
  
}

function mousePressed() {
  let someCircle = new Ball(mouseX,mouseY);
  theCircles.push(someCircle);
}