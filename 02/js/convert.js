// 섭씨: celsius, 화씨: fahrenheit

let fah = parseFloat(prompt("변환할 화씨 온도"));     // prompt를 이용해서 입력 받아서 fah에 저장
let cel;

cel = ((fah - 32) / 1.8).toFixed(1);    // toFixed(1)은 소수점 자릿수를 한 자리로 지정
alert(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);