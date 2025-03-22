const detail = document.querySelector("#detail");
const bttn = document.querySelector("#view");

bttn.onclick = () => {
  detail.classList.toggle("hidden");
}