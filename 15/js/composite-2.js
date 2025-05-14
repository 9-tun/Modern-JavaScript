let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

// destination
ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);  

// ctx.globalCompositeOperation = "source-over";
// ctx.globalCompositeOperation = "source-in";
// ctx.globalCompositeOperation = "source-out";
// ctx.globalCompositeOperation = "source-atop";
// ctx.globalCompositeOperation = "destination-over";
// ctx.globalCompositeOperation = "destination-in";
// ctx.globalCompositeOperation = "destination-out";
// ctx.globalCompositeOperation = "destination-atop";
// ctx.globalCompositeOperation = "lighter";
// ctx.globalCompositeOperation = "darken";
// ctx.globalCompositeOperation = "copy";
ctx.globalCompositeOperation = "xor";

// source
ctx.fillStyle = "#222";    
ctx.beginPath();
ctx.arc(180, 120, 50, 0, Math.PI * 2, false); 
ctx.fill();