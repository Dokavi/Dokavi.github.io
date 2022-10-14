// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = false;
let g = false;
let b = false;
let jumpBooleans = false;
let groundCoordinate = 300;
let groundLength = 3000;
let barrier = [];
let winFlag;
let shot;
let character1;
let a = []; 
let aProp = [500,50,50,3];
let blocks = [];
blocks.length = 3;
let b0 = [0,groundCoordinate,groundLength,300];
let state = "start";
let tempColor = "white";
let CenterW,CenterH;
let button;
let hit = false;
let won = false;
let collideValue = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  CenterW = width/2;
  CenterH = height/2;
  character1 = new character();
  blocks[0] = new ground(b0[0],b0[1],b0[2],b0[3]);
  blocks[1] = new ground(400,200,200,30);
  blocks[2] = new ground(700,100,200,30);
  a[0] = new enemies(aProp[0],aProp[1],aProp[2],3);
  a[1] = new enemies(600,300,50,3);
  shot = new bullets();
  winFlag = new flag(1500,250,50,50);
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
    character1.gravity(groundCoordinate,collideValue);
    blocks[0].create();
    blocks[1].create();
    blocks[2].create();
    a[0].create();
    a[0].moving(character1.x);
    a[1].create();
    a[1].moving(character1.x);
    a[1].gravity(groundCoordinate);
    winFlag.create();
    hitbox();
    characterCollision();
    collideValue = characterCollision();
  }
  else if (state === "lose") {
    loseScreen();
    restart();
  }
  else if (state === "win") {
    winning();
  }
}

class wall {
  constructor(tempX,tempY,tempLength,tempHeight,tempColor = "black") {
    this.x = tempX;
    this.y = tempY;
    this.length = tempLength;
    this.height = tempHeight;
    this.color = tempColor;
  }
  create() {
    fill(this.color);
    rect(this.x,this.y,this.length,this.Height);
  }
}

class bullets {
  constructor(tempX,tempY,tempSize,tempSpeed,tempColor = "white") {
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    this.xSpeed = tempSpeed;
    this.color = tempColor;
  }
  create() {
    fill(tempColor);
    circle(this.x,this.y,this.size);
  }
  moving() {
    this.x = this.xSpeed;
  }
}

class ground {
  constructor(tempX,tempY,tempLength,tempHeight,tempColor = "darkgreen") {
    this.x = tempX;
    this.y = tempY;
    this.length = tempLength;
    this.height = tempHeight;
    this.speed = 10;
    this.color = tempColor;
  }
  create() {
    fill(this.color);
    rect(this.x,this.y,this.length,this.height);
  }
  moving() {
    this.x += this.speed;
  }
}

class flag {
  constructor(tempX,tempY,tempLength,tempHeight) {
    this.x = tempX;
    this.y = tempY;
    this.length = tempLength;
    this.height = tempHeight;
  }
  create() {
    fill("gold");
    rect(this.x,this.y,this.length,this.height);
  }
}

function hitbox() {
  for (let i = 0; i < a.length;i++) {
    hit = collideRectCircle(character1.x,character1.y,character1.characterSize,character1.characterSize,a[i].x,a[i].y,a[i].size);
    if (hit) {
      state = "lose";
    }
  }
  won = collideRectRect(character1.x,character1.y,character1.characterSize,character1.characterSize,winFlag.x,winFlag.y,winFlag.length,winFlag.height);
  if (won) {
    state = "win";
  }
}

function characterCollision() {
  let check = false;
  for (let i = 0; i < blocks.length ;i++) {
    check = collideRectRect(character1.x,character1.y,character1.characterSize,character1.characterSize,blocks[i].x,blocks[i].y,blocks[i].length,blocks[i].height);
    if (check) {
      return [check,blocks[i].y,blocks[i].height];
    }
  }
}

function characterBarrier() {
  let stop = false;
  for (let i = 0; i < barrier.length ;i++) {
    stop = collideRectRect(character1.x,character1.y,character1.characterSize,character1.characterSize,barrier[i].x,barrier[i].y,barrier[i].length,barrier[i].height);
    if (stop) {
      return [stop,barrier[i].y,barrier[i].height];
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

function keyTyped() {
  if (key === "w") {
    character1.jump();
    console.log(character1.ySpeed);
  }
}

function mousePressed() {
  console.log(mouseX,mouseY);
  console.log(character1,blocks[1]);
  //checkcoordinate
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

//Losing Screen
function loseScreen() {
  fill("red");
  textSize(200);
  text("YOU DIED",CenterW-CenterW*0.6,CenterH);
}
//Winning Screen
function winning() {
  fill("gold");
  textSize(200);
  text("YOU WON",CenterW-CenterW*0.6,CenterH);
  textSize(100);
  text("Excellent Job!",CenterW-CenterW*0.4,CenterH+CenterH*0.3);
}

function restart() {
  setTimeout(function(){
    state = "start";
    hit = false;
    character1.x = 0;
    character1.y = 0;
    for (let i = 0; i < a.length;i++) {
      a[i].x = 500;
      a[i].y = 50;
    }
  },3000);
}