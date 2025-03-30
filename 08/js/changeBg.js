function changeBg() {
  let randomNumber = Math.floor(Math.random() * 5) + 1; // 1부터 5까지 수를 무작위로 생성
  //console.log(randomNumber);
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
}

document.addEventListener("load", changeBg());