// Game of life
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/ROWS;
  cellWidth = width/COLS;
  grid = createRandom2dArray(ROWS,COLS);
}

function draw() {
  background(220);
  displayGrid(grid);
}
//reset and taketurn
function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS,ROWS);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(COLS,ROWS);
  for (let y = 0;y<ROWS;y++) {
    for (let x =0; x < COLS; x++) {
      let neighbours = 0;
      // loop at all cell around this one
      for (let i = -1; i<=1;i++) {
        for (let j = -1; j<=1;j++) {
          //edge case check
          if (y+i >=0 && y+i <=ROWS && x+j >=0 && x+j <=COLS) {
            neighbours +=grid[y+i][x+j];
          }
        }
      }
      //don't count self!
      neighbours -= grid[y][x];
      //apply rules
      if (grid[y][x] ===1) {// alive
        if (neighbours ===2 || neighbours ===3) {
          nextTurn[y][x] === 1;
        }
        else {
          nextTurn[y][x] =0;
        }
      }
      if (grid[y][x] ===1) {
        if (neighbours ===3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  return nextTurn;
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