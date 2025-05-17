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

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;

  console.log (`${color}의 dx는 ${this.dx}, dy는 ${this.dy}`);
  
  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill
  }

  this.update = () => {
    ctx.fillStyle =  `rgba(255, 255, 255, 0.3)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.draw();    
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.width > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.height > canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }

    requestAnimationFrame(this.update);
  }
}

const color1 = "Yellow";
const rect1 = new Rectangle(50, 50, 200, 200, color1);

const color2 = "Red";
const rect2 = new Rectangle(100, 100, 100, 100, color2);

rect1.update();
rect2.update();