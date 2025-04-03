const seed = document.querySelector("#seed");
const pick = document.querySelector("#total");
const raffle = document.querySelector("#raffle");
const clear = document.querySelector("#clear");
const result = document.querySelector("#result");

raffle.addEventListener("click", (e) =>{ 
  e.preventDefault();

  let strResult = "당첨자: ";
  for (let i=1; i<=pick.value; i++){
    let randomNum = Math.floor(Math.random() * Number(seed.value)) + 1;
    strResult += `${randomNum}번, `;
  }
  
  result.innerHTML = `${strResult}`;
})


// 요점 정리

// 입력 값 → .value
// 글자만 → .innerText
// 태그까지 포함 → .innerHTML

//예
//<input id="name" value="홍길동">
//<div id="greeting"><b>Hello</b> world!</div>

//document.querySelector("#name").value        // "홍길동"
//document.querySelector("#greeting").innerText // "Hello world!" 태그 사이의 text
//document.querySelector("#greeting").innerHTML // "<b>Hello</b> world!" 태그 사이의 HTML 

