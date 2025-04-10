const string = prompt("영문으로 된 문자열을 입력하세요.");

// // 방법 1
// const firstCh = string[0].toUpperCase();  // 첫 번째 글자를 대문자로 만들어서 저장
// const remainStr = string.slice(1);        // 두 번째 글자부터 끝까지 저장
// const result = firstCh + remainStr;       // 대문자로 만든 첫 번째 글자와 나머지 문자열 합쳐서 저장
// document.write(result);                   

// 방법 2
const result = [string[0].toUpperCase(), ...string.slice(1)].join("");  // ...는 전개 연산자로서 문자열을 배열로 저장함
document.write(result);