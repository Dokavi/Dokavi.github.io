// Chess Board
// Doan Khanh Vinh
// September 19 2022
//

let button = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawChessBoard();
}
function drawChessBoard() {
  let cellWidth = width/8;
  let cellHeight = height/8;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else{
    cellHeight = cellWidth;
  }
  let isWhite = true;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (isWhite) {
        fill("white");
      }
      else {
        fill("black");
      }
      isWhite = !isWhite;
      rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
    }
    isWhite = !isWhite;
  }
}
function windowResized() {
  setup();
}
// function drawChessBoard() {
//   for (let i = 0; i < width; i += width / 8) {
//     chessColor();
//     for (let j = 0; j < height; j += height / 8) {
//       chessColor();
//       square(i, j, width / 8);
//     }
//   }
// }
// function chessColor() {
//   if (button === false) {
//     button = true;
//   }
//   else if (button === true) {
//     button = false;
//   }
//   if (button === true) {
//     fill("black");
//   }
//   else if (button === false) {
//     fill("white");
//   }
// }


