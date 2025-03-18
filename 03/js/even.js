let Number = prompt("숫자를 입력하세요.");

if(Number !== null){
  if (isNaN(Number)){
    alert("숫자를 입력해 주세요.");    
  }
  else if(Number === "" ){
    alert ("아무 것도 입력되지 않았습니다. 다시 입력해 주세요.");
  }
  else{
    Number = parseInt(Number);  // null이 아니면 정수로 변환
    (Number % 2 === 0) ? alert(`${Number}는 짝수입니다.`) : alert(`${Number}는 홀수입니다.`)
  }  
  location.reload(); // 새로고침
}
else {
  alert ("입력이 취소 됐습니다.");
}
