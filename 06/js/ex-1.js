// const button = document.querySelector("button");

// button.onclick = function() {
//   document.body.style.backgroundColor = "#222";
//   document.body.style.color = "#fff";
// }

// 토글로 업그레이드 시켜 봅시다.
const button = document.querySelector("button");

function setBackGround01() {
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "#FFFFFF";
}

function setBackGround02() {
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "#000000";
}

let isDark = false;

button.onclick = () => {
  if (isDark) {
    setBackGround01();
  } else {
    setBackGround02();
  }
  isDark = !isDark; // 상태 토글
};