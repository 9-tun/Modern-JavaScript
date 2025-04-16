let button = document.querySelector("button");
let result = document.querySelector("#result"); 

button.addEventListener("click",()=>{
  let numSet = new Set();

  while (numSet.size < 7){
    let randomInt = Math.floor(Math.random() * 45) + 1;
    numSet.add(randomInt);
  }

  result.innerHTML = [...numSet].join(", ");
})


