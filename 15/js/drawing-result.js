const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

// 캔버스 너비와 높이. toolbar.offsetHeight는 툴바의 높이
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

// 캔버스 위치를 고려해 좌표 계산하기 위해
const canvasOffsetX = canvas.offsetLeft;   // 왼쪽에서 얼마나 떨어졌나
const canvasOffsetY = canvas.offsetTop;    // 위에서 얼마나 떨어졌나

const ctx = canvas.getContext("2d");

let isDrawing = false;     // 드로잉 상태인지 확인
let startX;       // 그리기 시작하는 좌표, x
let startY;       // 그리기 시작하는 좌표, y
let lineWidth = 2;    // 선 굵기 기본 값

// 선 색과 선 굵기를 선택했을 때
toolbar.addEventListener("change", e => { // 입력값이 바뀌고 사용자가 다른 곳을 클릭해 입력창을 벗어났을 때 발생하는 이벤트 
  if (e.target.id === "stroke") {         // e = 이벤트 객체, e.target = 이벤트가 발생한 요소 (input 태그), e.target.id = 태그의 아이디
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {         // 선 굵기 선택(input id="lWidth")이면
    lineWidth = e.target.value;           // 선 굵기 설정
  }
});

// '지우기' 버튼 누르면 캔버스 지우기
toolbar.addEventListener("click", e => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown" , e => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;                               // 그리고 있지 않으면 아무 동작 안 함
  ctx.lineWidth = lineWidth;                            // 현재 선 굵기 적용
  ctx.lineCap = "round";                                // 선 끝 모양을 둥글게 설정
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);     // 현재 위치까지 선을 그림 (Y좌표 보정 포함)
  ctx.stroke();                                         // 선 그리기 실행
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;                                    // 드로잉 중지 상태로 설정
  ctx.beginPath();                                      // 다음 선을 위해 경로 초기화
});