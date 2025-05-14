const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 20;
ctx.shadowBlur = 10;


/* 중심이 (55, 60), 반지름 10인 내부 원과  
중심이 (80, 90), 반지름 100인 외부 원을 기준으로 방사형 그라디언트 생성 */
let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();