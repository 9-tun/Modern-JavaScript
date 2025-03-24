const container = document.querySelector("#container");

// 이미지 배열
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

// 첫 번째 이미지를 기본으로 표시합니다.
container.style.backgroundImage = `url(images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");   // 화살표
let i = 0;

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left"){           // e는 이벤트 객체, target은 실제로 클릭한 요소, id는 그 요소의 속성값
      i--;
      if(i<0){
        i = pics.length -1;
      }
    }
    else if (e.target.id === "right"){    // 오른쪽 화살표 클릭
      i++;
      if(i >= pics.length){
        i = 0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;   // 현재 이미지를 표시합시다.
  })
})

window.addEventListener("contextmenu", e => {
	e.preventDefault();
    alert("오른쪽 버튼을 사용할 수 없습니다.")
});