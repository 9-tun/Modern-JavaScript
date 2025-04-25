//let inputNum = parseInt(prompt('10보다 작은 숫자를 입력하세요.'));

let inputNum = document.getElementById("user-number");
let result = document.getElementById("result");
let button = document.querySelector("button");

button.addEventListener("click", ()=>{
  try{
    console.log(`${inputNum.value}`);
    result.innerHTML = "";

    if (inputNum.value !== "" && inputNum.value < 10){
      result.innerHTML = `${inputNum.value}`
    }else if(inputNum.value>=10){
      throw new Error("10보다 작은 수를 입력하세요.");
    }else if(inputNum.value === ""){
      throw new Error("숫자를 입력하세요.");
    }
  }catch(err){
    alert(`${err.message}`);
  }finally{
    inputNum.value = "";
  }
})



