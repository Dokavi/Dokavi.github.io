// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let groundCoordinate = 500;
let groundLength = 3000;
let character1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  character1 = new character();
}

function draw() {
  background(220);
  drawLine();
  character1.createCharacter();
  character1.movingWASD();
  character1.camera2D();
  character1.gravity();
  character1.jumpHoldButton();
  character1.jumpAllow();
  character1.jumping();
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
    square(this.x, this.y,this.characterSize);
    fill(this.characterColor);
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
  gravity() {
    if (this.y <groundCoordinate-this.characterSize) {
      this.y +=8;
    }
    else if (this.y >groundCoordinate-this.characterSize) {
      this.y = groundCoordinate-this.characterSize;
    }
  }
  jumping() {
    if (keyIsDown(32) && this.jumpHoldButton && this.jumpBooleans) {
      this.y-=this.jump;
      this.jumpTimer();
    } //key space jumplong
  }
  jumpTimer() {
    setTimeout(function(){
      this.jumpHoldButton = false;
    },750
    );
  }
  jumpAllow() {
    if (this.y<=groundCoordinate-this.characterSize && this.jumpHoldButton === false) {
      setTimeout(function(){
        this.jumpHoldButton = true;
      },2500);
    }
  }
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

