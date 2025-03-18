let input = prompt ("1보다 큰 숫자를 입력하세요.");
let sum = 0;

if (input === null){
  alert("입력이 취소되었습니다.");
  location.reload();
}
else if (input === ""){
  alert("아무 것도 입력되지 않았습니다. 다시 입력해 주세요.")
  location.reload();
}
else{
  const number = parseInt(input);
  if ( number === isNaN){
    alert ("숫자가 아닙니다.");
    location.reload();
  }
  else {
    for (let i = 1; i <= number; i++ ){
      if (i % 2 === 0) {
        sum += i;
        document.write (`${i} ----- ${sum} <br>`);
      }210
    }
  }
}
  


