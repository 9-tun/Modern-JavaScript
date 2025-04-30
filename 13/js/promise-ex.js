const order = new Promise((resolve, reject) =>{
  let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if(coffee != null && coffee != ""){
    document.querySelector(".start").innerText = `${coffee} 주문 접수`;
    setTimeout(()=>{
      resolve(coffee);    // .then 호출, 매개인자로 coffee 전달
    },3000);
  }else{
    reject("커피를 주문하지 않았습니다.");  // .catch 호출, 매개인자로 "커피를 주문하지 않았습니다." 전달
  }
});

order
  .then(display)
  .catch(showErr);


  function display(result){
    document.querySelector(".end").innerText = `${result} 준비 완료`;
    document.querySelector(".end").classList.add("active"); // css에서 정의된 active 클래스 스타일 적용
    document.querySelector(".start").classList.add("done"); // css에서 정의된 done 클래스 스타일 적용
  }

  function showErr(err){
    console.log(err);
  }