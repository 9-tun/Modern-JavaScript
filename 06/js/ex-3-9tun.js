const box = document.querySelector("#box");

box.addEventListener("mousemove", (e) => {
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});