const button = document.querySelector("#bttn");
const notiBox = document.querySelector("#noti-box");

button.addEventListener("click", (e)=>{
  e.preventDefault();

  const notice = document.createElement("div");
  notice.className = "noti";

  const msg = document.createElement("label");
  msg.innerText = "알림 내용이 표시됩니다.";

  notice.appendChild(msg);
  notiBox.appendChild(notice);

  /* 전역 함수 */
  setTimeout(() => {
    notiBox.removeChild(notice);
  }, 3000);
})