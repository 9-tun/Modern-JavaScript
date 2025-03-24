let container = document.querySelector("#container");
let image = document.querySelector("img");

const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg", "pic-6.jpg"];

container.addEventListener("mouseover", e => {
  // image.src = `images/${pics[5]}`; 
  setTimeout(() => {
    image.src = `images/${pics[5]}`; 
  }, 1000); // 1000ms 후 실행
});

container.addEventListener("mousemove", e => {
  image.src = `images/${pics[1]}`; 
});

container.addEventListener("mouseout", e => {
  image.src = `images/${pics[0]}`; 
});
