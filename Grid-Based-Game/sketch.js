// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const ROWS = 20;
const COLS = 20;
let grid;
let cellWidth;
let cellHeight;
let character = {
  x:0,
  y:0,
  size:0,
};
let noWall = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/ROWS;
  cellWidth = width/COLS*0.7;
  character.size = cellHeight;
  character.x = cellWidth/2;
  character.y = cellHeight/2;
  grid = createRandom2dArray(ROWS,COLS);
}

function draw() {
  background(220);
  displayGrid(grid);
  displayHUD();
  displayCharacter(character);
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y = 0;y<ROWS;y++) {
    emptyArray.push([]);
    for (let x = 0;x<COLS;x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function displayCharacter(character) {
  fill("yellow");
  circle(character.x,character.y,character.size);
}

function displayHUD() {
  fill(255);
  rect(width*0.7,0,width*0.3,height);
}

function displayGrid(grid) {
  for (let y = 0;y<ROWS;y++) {
    for (let x = 0;x<COLS;x++) {
      if (grid[y][x] === 0) {
        fill("white");
        rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === 1) {
        fill("black");
        rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
    }
  }
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y = 0;y<ROWS;y++) {
    emptyArray.push([]);
    for (let x = 0;x<COLS;x++) {
      if (random(100) <50) {
        emptyArray[y].push(0);
      }
      else{
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mousePressed() {
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);
  if (grid[y][x] === 0) {
    grid[y][x] =1;
  }
  else if (grid[y][x] === 1) {
    grid[y][x] =0;
  }
}

function mouseDragged() {
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);
  if (grid[y][x] === 0) {
    grid[y][x] =1;
  }
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }
  if (key === "d") {
    character.x +=cellWidth;
  }
  if (key === "a") {
    character.x -=cellWidth;
  }
  if (key === "s") {
    character.y +=cellHeight;
  }
  if (key === "w") {
    character.y -=cellHeight;
  }    
}

function wallCheck() {
  let x = Math.floor(character.x/cellWidth);
  let y = Math.floor(character.y/cellHeight);
  for (let a= -1; a <=1; a++) {
    if (a!== 0 && x+a >= 0 && x+a <= grid[0].length && y+a >=0 && y+a <=grid.length) {
      if (grid[y][x+a] === 0) {
        return false;
      }
      if (grid[y][x+a] === 0) {
        return false;
      }
    }
  }
}