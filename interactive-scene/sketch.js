// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let groundCoordinate = 500;
let groundLength = 3000;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  camera2D();
  drawLine();
  firstObject();
  keyPressed();
}

class character {
  constructor() {
    this.x = 60;
    this.y = 60;
    this.characterSpeed = 5;
    this.characterSize = 100;
    this.jump = 10;
    this.jumpHoldButton = true;
    this.jumpBooleans = true;
    this.characterColor = "red";
  }
  createCharacter() {
    fill("characterColor");
    square(this.x, this.y,this.characterSize);
    fill(255);
  }
  movingWASD() {
    if (keyIsDown(65)) {
      this.x -=this.characterSpeed;
    } // key A move left
    if (keyIsDown(68)) {
      this.x +=this.characterSpeed;
    } // key D move right
    if (keyIsDown(83)) {
      this.y +=this.characterSpeed;
    } // key S move down
  }
  camera2D() {
    translate(width/2-this.x,height/2-this.y);
  }
}

function firstObject() {
  square(x,y,characterSize);
  fill("red");
}

function movingWASD() {
  translate(width/2-x,height/2-y);
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


function gravity() {
  if (y <groundCoordinate-characterSize) {
    y +=8;
  }
  else if (y >groundCoordinate-characterSize) {
    y = groundCoordinate-characterSize;
  }
}


function jumping() {
  if (keyIsDown(32) && jumpHoldButton && jumpBooleans) {
    y-=jump;
    jumpTimer();
  } //key space jumplong
  jumpAllow();
}

function jumpTimer() {
  setTimeout(function(){
    jumpHoldButton = false;
  },750
  );
}

function jumpAllow() {
  if (y<=groundCoordinate-characterSize && jumpHoldButton === false) {
    setTimeout(function(){
      jumpHoldButton = true;
    },2500);
  }
  if (jumpBooleans === true) {
    setTimeout(function() {
      jumpBooleans =false; 
    },2500);
  }
}

function keyPressed() {
  if (keyCode === 32 && jumpHoldButton && jumpBooleans) {
    y -=15;
  }
}//key space jump short
