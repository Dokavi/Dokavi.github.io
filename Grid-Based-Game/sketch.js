// Dungeon explorer?
// Doan Khanh Vinh
// Date
//
// Extra for Experts:
// - create a special function for moving between areas.


const ROWS = 20;
const COLS = 20;
let grid;
let cellWidth;
let cellHeight;
let character = {
  x:3,
  y:3,
  size:0,
};
let start;
let room2;
let north;
let west;
let south;
let east;
let door;
let grassTextures;
let rock;
let player;
let areaState = "start";


function preload() {
  start = loadJSON("startA.json");
  room2 = loadJSON("room2.json");
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
  if (areaState === "start") {
    grid = start;
  }
  
  grid[character.y][character.x] = "player";
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
      else if (grid[y][x]=== "player") {
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

// All the code using key, I don't know if create a function and put it in will still have the same effect.
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
      grid[character.y][character.x] = "player";
    }
  }
  if (key === "s" && character.y===19) {
    // set new area
    grid = create2dArray(COLS, ROWS);
    // set character
    if (character.y===ROWS-1) {
    //move to other side of the map
      character.y = 1;
      //set new player new location
      grid[character.y][character.x] = "player";
    }
  }
  if (key === "a" && character.x===0) {
    // set new area
    if (areaState === "room2") {
      grid[character.y][character.x] = 0; //reset old location
      grid = start;
      areaState = "start";
    }
    // set character
    if (character.x === 0) {
    //move to other side
      character.x = COLS-1;
      //set location
      grid[character.y][character.x] = "player";
    }
  }
  if (key === "d" && character.x===19) {
    // set new area
    if (areaState === "start") {
      grid[character.y][character.x] = 0; //reset old location
      grid = room2;
      areaState = "room2";
    }
    // set character
    if (character.x === COLS-1) {
      //move to other side
      character.x = 1;
      //set location
      grid[character.y][character.x] = "player";
    }
  }
  
  //Moving function
  if (key === "d" && grid[character.y][character.x+1] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.x++;
    //set new player location
    grid[character.y][character.x] = "player";
  }
  if (key === "a" && grid[character.y][character.x-1] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.x--;
    //set new player location
    grid[character.y][character.x] = "player";
  }
  if (key === "w" && grid[character.y-1][character.x] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.y--;
    //set new player location
    grid[character.y][character.x] = "player";
  }
  if (key === "s" && grid[character.y+1][character.x] ===0) {
    //reset old location
    grid[character.y][character.x] = 0;
    //move
    character.y++;
    //set new player location
    grid[character.y][character.x] = "player";
  }
}
