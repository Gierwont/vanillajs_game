function Ziutek() {
  this.img = new Image();
  this.img.src = "bahamut.png";

  this.column = 0;
  this.row = 0;
  this.frameWidth = 96;
  this.frameHeight = 96;
  this.counter = 0;
  this.delay = 7;

  this.x = 100;
  this.y = 100;

  this.forward = function () {
    this.row = 0;
    this.counter++;
    if(this.y< 545) {
      this.y += 5;
    }
    if (this.counter > this.delay) {
      this.counter = 0;
      this.column++;
      if (this.column > 3) {
        this.column = 0;
      }
    }
  };
  this.back = function () {
    if(this.y>5) {
      this.y -= 5;
    }
    
    this.row = 3;
    this.counter++;
    if (this.counter > this.delay) {
      this.counter = 0;
      this.column++;
      if (this.column > 3) {
        this.column = 0;
      }
    }
  };
  this.left = function () {
    this.row = 1;
    this.counter++;
    if(this.x > 5) {
      this.x -= 5;
    }
    if (this.counter > this.delay) {
      this.counter = 0;
      this.column++;
      if (this.column > 3) {
        this.column = 0;
      }
    }
  };
  this.right = function () {
    this.row = 2;
    this.counter++;
    if(this.x < 850) {
      this.x += 5;
    }
    
    if (this.counter > this.delay) {
      this.counter = 0;
      this.column++;
      if (this.column > 3) {
        this.column = 0;
      }
    }
  };



  this.draw = function (ctx) {
    ctx.drawImage(
      this.img,
      this.column * this.frameWidth,
      this.row * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth,
      this.frameHeight
    );
    console.log(this.x)
    console.log(this.y)
  };
}

export { Ziutek }
