// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x:500,y:100},
  {x:100,y:600},
  {x:900,y:600},
];
let sierpinski_depth = 1;
let theColors = [];

function setup() {
  createCanvas(1000, 700);
  for (let i = 0;i<9;i++) {
    theColors.push(color(random(255),random(255),random(255)));
  }
}

function draw() {
  background(220);
  sierpinski(triangleVertices,sierpinski_depth);
}

function sierpinski(points,depth) {
  noStroke();
  fill(theColors[depth]);
  triangle(points[0].x,points[0].y  ,points[1].x,points[1].y  ,points[2].x,points[2].y);
  if (depth >0) {
    sierpinski([points[0],getMidpoint(points[0],points[1]),getMidpoint(points[0],points[2])],depth-1);
    sierpinski([points[1],getMidpoint(points[0],points[1]),getMidpoint(points[1],points[2])],depth-1);
    sierpinski([points[2],getMidpoint(points[1],points[2]),getMidpoint(points[2],points[0])],depth-1);
  }
}

function getMidpoint(point1,point2) {
  let result = {x:0,y:0};
  result.x = (point1.x +point2.x) /2;
  result.y = (point1.y +point2.y) /2;
  return result;
}

function mousePressed() {
  if (sierpinski_depth < 8) {
    sierpinski_depth ++;
  }
}