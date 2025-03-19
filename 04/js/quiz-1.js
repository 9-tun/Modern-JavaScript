let number = parseInt(prompt("숫자를 입력하세요."));

function plusminus(number) {
  if (number > 0)
    alert ("입력하신 숫자는 양수입니다.");
  else if (number === 0)
    alert (`입력하신 숫자는 ${number}입니다.`);
  else if(number < 0 )
    alert ("입력하신 숫자는 음수입니다.");
}

if (isNaN(number)){
  alert ("숫자를 다시 입력해 주세요.");
  location.reload();
}
else{
  plusminus(number);
}
