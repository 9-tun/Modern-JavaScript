const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Rectangle(x, y, width, height, color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill
  }
}

const color1 = "Yellow";
const rect1 = new Rectangle(50, 50, 200, 200, color1);

const color2 = "Red";
const rect2 = new Rectangle(100, 100, 100, 100, color2);

rect1.draw();
rect2.draw();

