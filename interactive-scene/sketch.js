// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let groundCoordinate = 500;
let groundLength = 3000;
let character1;
let state = "start";
let CenterW,CenterH;
function setup() {
  createCanvas(windowWidth, windowHeight);
  CenterW = width/2;
  CenterH = height/2;
  character1 = new character();
}

function draw() {
  background(220);
  // if (state === "start") {
  //   menuScreen();
  // }
  // else if (state === "main") {
    drawLine();
    character1.createCharacter();
    character1.movingWASD();
    character1.gravity();
    character1.camera2D();
  // }
}

class character {
  constructor() {
    this.x = 60;
    this.y = 60;
    this.characterSpeed = 5;
    this.characterSize = 100;
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

function mousePressed() {
  if (state === "start" && startButton(CenterW-CenterW*0.2, CenterW+CenterW*0.2, CenterH-CenterH*0.2, CenterH+CenterH*0.2)) {
    state = "main";
  }
}

function startButton(left,right,top,bottom) {
  return mouseX>= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function menuScreen() {
  if (startButton(CenterW-CenterW*0.2, CenterW+CenterW*0.2, CenterH-CenterH*0.2, CenterH+CenterH*0.2)) {
    fill ("gray");
  }
  else {
    fill("black");
  }
  rectMode(CENTER);
  rect(CenterW,CenterH, CenterW*0.4, CenterH*0.4);
  fill("white");
  textSize(50);
  text("PLAY",CenterW-CenterW*0.08,CenterH);
}
