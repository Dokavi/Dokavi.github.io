// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let b1,b2;

class Button {
  constructor(x,y,tempW,tempH,newState) {
    this.x = x;
    this.y = y;
    this.width = tempW;
    this.height = tempH;
    this.color = color(random(255),random(255),random(255));
    this.change = newState;
    this.hoverColor = "gray";
  }
  display() {
    if (this.isInside(mouseX,mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.color);
    }
    rect(this.x,this.y,this.width,this.height);
  }
  changeState() {
    state = this.change;
  }
  isInside(x,y) {
    return x>=this.x && x<=this.x+this.width && y >= this.y && y <=this.y +this.height;
  }
}

let buttons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  b1 = new Button(300,100,100,100,"b1");
  b2 = new Button(300,300,100,100,"b2");
  buttons.push(b2);
  buttons.push(b1);
}

function draw() {
  if (state === "start") {
    background(220);
  }
  else if (state ==="b1") {
    background(0);
  }
  else if (state === "b2") {
    background(220);
  }
  for (let i = 0;i<=buttons.length-1;i++) { 
    buttons[i].display();
  }
}

function mousePressed() {
  for (let i = 0;i<=buttons.length-1;i++) {
    if (buttons[i].isInside(mouseX,mouseY)) {
      buttons[i].changeState();
    }
  }
}