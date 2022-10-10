class character {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 5;
    this.characterSize = 100;
    this.characterColor = "white";
    this.ySpeed = 0;
  }
  createCharacter() {
    fill(this.characterColor);
    square(this.x, this.y,this.characterSize);
  }
  movingWASD() {
    if (keyIsDown(65)) {
      this.x -=this.xSpeed;
    } // key A move left
    if (keyIsDown(68)) {
      this.x +=this.xSpeed;
    } // key D move right
    if (keyIsDown(83)) {
      this.y +=this.xSpeed;
    } // key S move down
    this.y += this.ySpeed;
  }
  camera2D() {
    translate(width/4-this.x,height*0.7-this.y);
  }
  gravity(groundCoordinate) {
    if (this.y <groundCoordinate-this.characterSize) {
      this.ySpeed += 0.5;
    }
    else if (this.y >=groundCoordinate-this.characterSize) {
      this.ySpeed = 0;
      this.y = groundCoordinate-this.characterSize;
    }
  }
  jump() {
    this.ySpeed-=15;
  }
}