// Project Title
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
let character ={
  x:0,
  y:0
};
let stoneImg;
let grassImg;

function preload() {
  stoneImg = loadImage("stone.png");
  grassImg = loadImage("grass.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/ROWS;
  cellWidth = width/COLS;
  grid = createRandom2dArray(ROWS,COLS);
  //place player in grid
  grid[character.y][character.x] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
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
        image(grassImg,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
        // fill("white");
        // rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(stoneImg,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
        // fill("black");
        // rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x]=== 9) {
        image(grassImg,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
        fill("yellow");
        circle(x*cellWidth+cellWidth/2,y*cellHeight +cellHeight/2,cellHeight);
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

function keyPressed() {
  //recreate grid
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }
  if (key === "d" && grid[character.y][character.x+1] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.x++;
    //set new player location
    grid[character.y][character.x] = 9;
  }
  if (key === "a" && grid[character.y][character.x-1] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.x--;
    //set new player location
    grid[character.y][character.x] = 9;
  }
  if (key === "w" && grid[character.y-1][character.x] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.y--;
    //set new player location
    grid[character.y][character.x] = 9;
  }
  if (key === "s" && grid[character.y+1][character.x] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.y++;
    //set new player location
    grid[character.y][character.x] = 9;
  }   
}