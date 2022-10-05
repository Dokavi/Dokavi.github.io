// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = false;
let g = false;
let b = false;
let groundCoordinate = 500;
let groundLength = 3000;
let character1;
let state = "start";
let tempColor = "white";
let CenterW,CenterH;
let button = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  CenterW = width/2;
  CenterH = height/2;
  character1 = new character();
}

function draw() {
  background(100);
  if (state === "start") {
    menuScreen();
  }
  else if (state === "createCharacter") {
    chooseCharacter();
  }
  else if (state === "main") {
    character1.camera2D();
    drawLine();
    character1.characterColor = tempColor;
    character1.createCharacter();
    character1.movingWASD();
    character1.gravity();
    character1.jump();
  }
}

class character {
  constructor() {
    this.x = 60;
    this.y = 60;
    this.characterSpeed = 5;
    this.characterSize = 100;
    this.characterColor = "white";
  }
  createCharacter() {
    fill(this.characterColor);
    square(this.x, this.y,this.characterSize);
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
  jump() {
    if (keyIsDown(32) && button) {
      this.y-=12;
    }
  }
}

function drawLine() {
  beginShape();
  vertex(0,groundCoordinate);
  vertex(groundLength,groundCoordinate);
  endShape();
  beginShape();
  fill(0);
  for (let i=0;i<100;i+=3) {
    vertex(i*10,300 );
    vertex((i+1)*10,200 );
    vertex((i+2)*10,300);
  }
  endShape();
}

function mousePressed() {
  if (state === "start" && startButton(CenterW-CenterW*0.2, CenterW+CenterW*0.2, CenterH-CenterH*0.2, CenterH+CenterH*0.2)) {
    state = "createCharacter";
  }
  //character
  else if (state === "createCharacter" && chooseRed()) {
    state = "main"; tempColor = "red";
  }
  else if (state === "createCharacter" && chooseGreen()) {
    state = "main"; tempColor = "green";
  }
  else if  (state === "createCharacter" && chooseBlue()) {
    state = "main"; tempColor = "blue";
  }
  //play
}

//MenuScreen
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
//Character creation Screen

function chooseCharacter() {
  fill(220);
  rectMode(CORNER);
  if (chooseRed()){
    fill("red");
    square(0,0,width/3);
  }

  else if (chooseGreen()) {
    fill("green");
    square(width/3,0,width/3);
  }

  else if (chooseBlue()) {
    fill("blue");
    square(width/3*2,0,width/3);
  }
  
}

function chooseRed() {
  return mouseX>= 0 && mouseX <= width/3 && state === "createCharacter";
}
function chooseGreen() {
  return mouseX <= 2*width/3 && state === "createCharacter";
}
function chooseBlue() {
  return mouseX<=width && state === "createCharacter";
}