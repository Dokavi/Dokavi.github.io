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
  x:1,
  y:1,
  size:0,
};
let north;
let west;
let south;
let east;
let door;
let grassTextures;
let rock;
let player;


function preload() {
  north = loadImage("dirt_north_new.png");
  west = loadImage("dirt_west_new.png");
  south = loadImage("dirt_south_new.png");
  east = loadImage("dirt_east_new.png");
  grassTextures = loadImage("grass_1.png");
  rock = loadImage("lab-rock_0.png");
  player = loadImage("human_new.png");
  door = loadImage("entrance.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = height/ROWS;
  cellWidth = width/COLS*0.7;
  grid = createRandom2dArray(ROWS,COLS);
  grid[character.y][character.x] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
  displayHUD();
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

function displayHUD() {
  fill(255);
  rect(width*0.7,0,width*0.3,height);
}

function displayGrid(grid) {
  for (let y = 0;y<ROWS;y++) {
    for (let x = 0;x<COLS;x++) {
      if (grid[y][x] === 0) {
        image(grassTextures,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(rock,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === 2) {
        fill("gray");
        rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === 3) {
        image(door,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === "north") {
        image(north,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === "west") {
        image(west,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === "south") {
        image(south,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === "east") {
        image(east,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x]=== 9) {
        image(grassTextures,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
        image(player,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
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
  //map editor
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);
  //default move
  if (keyIsDown(192)) {
    grid[y][x] = 0;
  }
  //key 1 wall 1
  if (keyIsDown(49)) {
    grid[y][x] = 1;
  }
  //key 2 wall 2
  if (keyIsDown(50)) {
    grid[y][x] = 2;
  }
  //key 3 wall 3
  if (keyIsDown(51)) {
    grid[y][x] = 3;
  }
  if (keyIsDown(52)) {
    grid[y][x] = "north";
  }
  if (keyIsDown(53)) {
    grid[y][x] = "west";
  }
  if (keyIsDown(54)) {
    grid[y][x] = "south";
  }
  if (keyIsDown(55)) {
    grid[y][x] = "east";
  }
}


function keyPressed() {
  //recreate grid
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }
  //Move Areas
  if (key === "w" && character.y===0) {
    // set new area
    grid = create2dArray(COLS, ROWS);
    // set character
    if (character.y === 0) {
    //move to other side of the map
      character.y = 19;
      //set new player new location
      grid[character.y][character.x] = 9;
    }
  }
  if (key === "s" && character.y===19) {
    // set new area
    grid = create2dArray(COLS, ROWS);
    // set character
    if (character.y===ROWS-1) {
    //move to other side of the map
      character.y = 0;
      //set new player new location
      grid[character.y][character.x] = 9;
    }
  }
  if (key === "a" && character.x===0) {
    // set new area
    grid = create2dArray(COLS, ROWS);
    // set character
    if (character.x === 0) {
    //move to other side
      character.x = COLS;
      //set location
      grid[character.y][character.x] = 9;
    }
  }
  if (key === "d" && character.x===19) {
    // set new area
    grid = create2dArray(COLS, ROWS);
    // set character
    if (character.x === COLS-1) {
    //move to other side
      character.x = 0;
      //set location
      grid[character.y][character.x] = 9;
    }
  }
  
  //Moving function
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
