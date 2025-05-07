const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");    

ctx.beginPath();
ctx.moveTo(200, 20);
ctx.lineTo(120, 220);
ctx.lineTo(300, 80);
ctx.lineTo(100, 80);
ctx.lineTo(280, 220);
ctx.lineTo(200, 20);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();