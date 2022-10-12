class enemies {
  constructor(tempX,tempY,tempSize) {
    this.x = tempX;
    this.y = tempY;
    this.xSpeed = 0.5;
    this.size = tempSize;
    this.color = "purple";
    this.ySpeed = 0;
  }
  create() {
    fill(this.color);
    circle(this.x,this.y,this.size);
  }
  moving(characterx) {
    if (this.x<= characterx) {
      this.x+= this.xSpeed;
    }
    else if (this.x >= characterx) {
      this.x -= this.xSpeed;
    }
    // this.y += this.ySpeed;
  }
  gravity(groundCoordinate) {
    if (this.y <groundCoordinate-this.size/2) {
      this.ySpeed += 0.5;
    }
    else if (this.y >=groundCoordinate-this.size/2) {
      this.ySpeed = 0;
      this.y = groundCoordinate-this.size/2;
    }
  }
}