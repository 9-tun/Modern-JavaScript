let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    let students = JSON.parse(xhr.responseText);  // JSON 문자열을 객체로 변환
    renderHTML(students);
  }
}

function renderHTML(contents){
  let output = "";
  for (let content of contents){
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
    `;
  }
  document.getElementById("result").innerHTML = output;
  //document.querySelector("#result").innerHTML = output;
}