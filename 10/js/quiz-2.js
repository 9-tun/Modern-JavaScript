const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

// 함수 작성할 부분
origin.innerText = numbers;
result.innerText = tail(numbers);

function tail(numbers){
  if (numbers.length > 0) {
    return numbers.slice(1, numbers.length);
  }  
  else{
    return numbers;
  }
}

