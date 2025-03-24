const butt = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

butt.addEventListener("click", e => {
  nav.classList.toggle("active");
})