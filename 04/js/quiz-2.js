const num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));
const num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));

document.write("두 수의 최대 공약수 구하기");

let bigNum 
if (num1 >= num2)
  bigNum = num1;
else
  bigNum = num2;

let result 
for(let i = 1; i <= bigNum; i++){
    if (num1 % i === 0 && num2 % i === 0){
      result = i;
    }
}

console.log (`최대 공약수는 ${result}입니다.`);