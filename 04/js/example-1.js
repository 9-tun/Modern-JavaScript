let number1 = prompt("첫 번째 숫자를 입력하세요.");
let number2 = prompt("두 번째 숫자를 입력하세요.");

let a = parseInt(number1);
let b = parseInt(number2);

function multiple(a, b) {
    return a * b;
}

console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);