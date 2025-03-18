const input = prompt ("숫자를 입력하세요.");
let isPrime = true;

if (input === null){
  alert ("입력이 취소됐습니다.");
  location.reload();
}
else if (input === "" ){
  alert ("아무 것도 입력되지 않았습니다.");
  location.reload();
}
else{
  const number = parseInt(input);

  if (isNaN(number)){
    alert("숫자를 입력해 주세요.");    
    location.reload(); // 새로고침
  }
  else if (number === 1){
    document.write(`${number}는 소수도, 합성수도 아닙니다.`)
  } 
  else if(number === 2){
    isPrime = true;
  }
  else{
    // 소수인지 확인하려면, 2부터 자신보다 1 작은 수까지 숫자를 하나씩 나눠보는 겁니다.
    // 나눴을 때 뭔가 나눠 떨어진다면 소수가 아니겠지요
    for (let i = 2; i < number; i++){
      if(number % i === 0) {
        isPrime = false;
        break;
      }
      else {
        // 끝까지 나눠봤지만 한 번도 나머지가 0인 경우가 없었다면, 그건 소수입니다.
        isPrime = true;
      }
    }
  }
}


if (isPrime){
  document.write (`${number}는 소수입니다.`);
}
else{
  document.write(`${number}는 소수가 아닙니다.`);
}
