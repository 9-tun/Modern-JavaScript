// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(user => console.log(user));

async function init(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  //console.log(users);
  display(users);
}

function display(users){
  const result = document.querySelector("#result");
  let string = "";
  users.forEach(user => {
    string += `<table>
              <tr><td>이름</td><td>${user.name}</td></tr>
              <tr><td>아이디</td><td>${user.username}</td></tr>
              <tr><td>이메일</td><td>${user.email}</td></tr>
              </table>`;
  });
  result.innerHTML = string;
}

init();