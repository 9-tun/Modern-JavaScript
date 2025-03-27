const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container>h2");

orderButton.addEventListener("click", () => {
  // 새로운 p 요소 생성
  let newP = document.createElement("p");

  // 책 제목을 내용으로 하는 텍스트 노드 생성
  let textNode = document.createTextNode(title.innerText);

  // p 자식 요소에 텍스트 노드 추가
  newP.appendChild(textNode);

  // 스타일 
  newP.style.fontSize = "0.8em";  // 부모 요소 글자 크기 기준
  newP.style.color = "blue";

  // p 요소를 장바구니 영역 자식 노드로 추가
  orderInfo.appendChild(newP);
}, {once : true}/* 한 번만 실행되도록 */);