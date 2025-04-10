const email = document.querySelector("#userEmail");
const button = document.querySelector("button");
const result = document.querySelector("#result");

// button.addEventListener("click", () =>{
//   let username, domain;

//   if(email.value !== ""){
//     username = email.value.split("@")[0];
//     username = username.substring(0,3);
//     domain = email.value.split("@")[1];
//     result.innerText = `${username}...@${domain}`;
//     email.value = "";
//   }
// })

// 사용자 이름의 절반만 표시하기
button.addEventListener("click", () =>{
  let username, domain, len;

  if(email.value !== ""){
    username = email.value.split("@")[0];
    len = username.length;  
    username = username.substring(0,Math.floor(len/2));
    domain = email.value.split("@")[1];
    result.innerText = `${username}...@${domain}`;
    email.value = "";
  }
})