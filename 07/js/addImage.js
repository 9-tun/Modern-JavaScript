const today = new Date();           // 현재 날짜, 시간 정보를 담은 today 객체
const hrs = today.getHours();       // 현재 시간 중 hour 정보 가져오기
const container = document.querySelector("#container");

let newImg = document.createElement("img");   // 이미지 노드 생성
newImg.src = (hrs < 12) ? "images/morning.jpg" : "images/afternoon.jpg";    // hrc 값에 따라 img 경로를 다르게 설정
container.appendChild(newImg);