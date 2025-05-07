const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);   // 캔버스 크기에 맞게 지정
} 
img.src = "images/cat.jpg";

ctx.beginPath();
ctx.ellipse(canvas.width/2-50, canvas.height/2, 150, canvas.height/2, 0, 0, Math.PI*2);
ctx.stroke();
ctx.clip();	/* 클리핑 */