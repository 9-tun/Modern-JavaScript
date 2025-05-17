const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;    // 캔버스 너비
canvas.height = window.innerHeight;  // 캔버스 높이

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#222"
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

// 키 상태 저장 객체
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

// 키 누르면 true
window.addEventListener("keydown", (e) => {
  if (e.key in keys) keys[e.key] = true;
});

// 키 떼면 false
window.addEventListener("keyup", (e) => {
  if (e.key in keys) keys[e.key] = false;
});

function move() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 원을 지울 때 완전히 흰색으로 지우지 않고, 약간 불투명도가 있는 색으로 지우면 끌리는 자국처럼 보일 것입니다.
  ctx.fillStyle = `rgba(255, 255, 255, 0.3)`;     // 캔버스를 채울 색, 흰색에 불투명도가 0.3
  ctx.fillRect (0, 0, canvas.width, canvas.height); // 캔버스를 다 덮는다, 그러면 덧칠을 하면 할수록 제일 처음 그린 애는 완전히 흰색에 가깝게 되고, 최근에 그린 것일수록 투명도가 점점 옅어질 것이다.
  drawCircle();

  // circle.x += circle.dx;   // circle.x = circle.x + circle.dx
  // circle.y += circle.dy;

    // 방향키에 따라 이동
  if (keys.ArrowRight) circle.x += circle.dx;
  if (keys.ArrowLeft)  circle.x -= circle.dx;
  if (keys.ArrowDown)  circle.y += circle.dy;
  if (keys.ArrowUp)    circle.y -= circle.dy;

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
    circle.color = `rgb(${Math.floor(Math.random() * 256)}, 
                      ${Math.floor(Math.random() * 256)}, 
                      ${Math.floor(Math.random() * 256)})`;
  }

  if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy = -circle.dy;
    circle.color = `rgb(${Math.floor(Math.random() * 256)}, 
                      ${Math.floor(Math.random() * 256)}, 
                      ${Math.floor(Math.random() * 256)})`;
  }
  
  requestAnimationFrame(move);
}

move();