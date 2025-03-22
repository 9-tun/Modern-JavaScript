const bttn = document.querySelector("#calc");

const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");

const txtResult = document.querySelector("#result");

// 버튼을 클릭하면, 결과를 result에 표시하기
bttn.onclick = () => {
  let bigNum 
  if (num1.value >= num2.value)
    bigNum = num1.value;
  else
    bigNum = num2.value;

  let result 
  for(let i = 1; i <= bigNum; i++){
      if (num1.value % i === 0 && num2.value % i === 0){
        result = i;
      }
  }
  
  txtResult.innerText = result;
}
