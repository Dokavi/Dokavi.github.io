class character {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 5;
    this.characterSize = 60;
    this.characterColor = "white";
    this.ySpeed = 0;
  }
  createCharacter() {
    fill(this.characterColor);
    square(this.x, this.y,this.characterSize);
  }
  movingWASD(characterBarrier) {
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
    translate(width/3-this.x,height*0.7-this.y);
  }
  gravity(groundCoordinate,collideValue = [false,0,0]) {
    if (this.y <groundCoordinate-this.characterSize) {
      this.ySpeed += 0.5;
    }
    else if (this.y >=groundCoordinate-this.characterSize) {
      this.ySpeed = 0;
      this.y = groundCoordinate-this.characterSize;
    }
    if (collideValue[0]) {
      if (this.y >=collideValue[1]-this.characterSize) {
        this.ySpeed = 0;
        this.y = collideValue[1]-this.characterSize;
        constrain(this.ySpeed,10,0);
      }
      else if (this.y <collideValue[1]-this.characterSize) {
        this.ySpeed +=0.5;
      }
    }
  }
  jump() {
    this.ySpeed-=10;
  }
}