// OOP Pair Programming Starter Code
// Khanh Vinh  && Jason
// 11/25/2022


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!
let bulletArray =[];

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.speed = 3;
  }
  // if(keyIsDown(87))  // key W
  // if(keyIsDown(65))  // key A
  // if(keyIsDown(83))  // key S
  // if(keyIsDown(68))  // key D
  update() {
    if (keyIsDown(87)) {
      this.y -=this.speed;
    }
    if(keyIsDown(83)) {
      this.y += this.speed;
    }
    if(keyIsDown(65)) {
      this.x -= this.speed;
    }
    if(keyIsDown(68)) {
      this.x += this.speed;
    }
  }
  
  display() {
    for (let i = bulletArray.length - 1;i > 0;i--) {
      bulletArray[i].display();
      bulletArray[i].update(i);
    }
    image(this.image,this.x,this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if(keyIsDown(32)) {
      let bullet = new Bullet(this.x, this.y, 0, -5, bulletImage);
      bulletArray.push(bullet);
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = theImage;
  }

  update(i) {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    if(!this.isOnScreen()) {
      this.x += this.dx;  
      this.y += this.dy;
    }
    else {
      bulletArray.reverse();
      bulletArray.pop();
      bulletArray.reverse();
    }
  }

  display() {
    // show the bullet
    image(this.image, this.x + shipImage.width/2 - bulletImage.width/2, this.y + shipImage.height / 2 + bulletImage.height / 2);
  }

  isOnScreen() {
    return this.y + shipImage.height / 2 + shipImage.height<=0;
  }
}

