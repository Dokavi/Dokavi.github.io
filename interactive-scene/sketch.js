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
let CenterW,CenterH;
let tempColor = "red";
function setup() {
  createCanvas(windowWidth, windowHeight);
  CenterW = width/2;
  CenterH = height/2;
  character1 = new character(tempColor);
}

function draw() {
  background(220);
  if (state === "start") {
    menuScreen();
  }
  else if (state === "createCharacter") {
    chooseCharacter();
  }
  else if (state === "main") {
    character1.camera2D();
    drawLine();
    character1.createCharacter();
    character1.movingWASD();
    character1.gravity();
  }
}

class character {
  constructor(tempColor) {
    this.x = 60;
    this.y = 60;
    this.characterSpeed = 5;
    this.characterSize = 100;
    this.characterColor = tempColor;
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
    state = "createCharacter";
  }
  //character
  else if (state === "createCharacter" && chooseRed) {
    state = "main"; tempColor = "red";
  }
  else if (state === "createCharacter" && chooseGreen) {
    state = "main"; tempColor = "green";
  }
  else if  (state === "createCharacter" && chooseBlue) {
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
  if (chooseRed()){
    fill("red");
    rect(0,0,windowWidth,windowHeight);
  }
  else if (chooseGreen) {
    fill("green");
    rect(width/3,0,width/3*2,height);
  }
  else if (chooseBlue) {
    fill("blue");
    rect(width/3*2,0,width,height);
  }
  
}

function chooseRed() {
  return mouseX>= 0 && mouseX <= width/3 && mouseY >= 0 && mouseY <= height && state === "createCharacter";
}
function chooseGreen() {
  return mouseX>= width/3 && mouseX <= 2*width/3 && mouseY >= 0 && mouseY <= height && state === "createCharacter";
}
function chooseBlue() {
  return mouseX>= 2*width/3 && mouseX <= width && mouseY >= 0 && mouseY <= height && state === "createCharacter";
}