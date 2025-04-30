// fetch("http://dummyjson.com/quotes")
// .then(response => response.json())
// .then(user => console.log(user))
// .catch(error => console.log(error));

let result = document.querySelector("#result");
let quoteDisplay = document.querySelector(".quote");
let authorDisplay = document.querySelector(".author");

// 1 이상 30 이하의 정수 무작위로 수 추출
let randomInt = Math.floor(Math.random() * 30) + 1;

function displayQuote(index){
  fetch(`http://dummyjson.com/quotes`)
  .then(response => response.json())
  .then(json =>{
    let quote = json.quotes[index].quote;
    let author = json.quotes[index].author; 
    
    quoteDisplay.innerHTML = `${quote}`;
    authorDisplay.innerHTML = `${author}`;
  }); 
}
displayQuote(randomInt);