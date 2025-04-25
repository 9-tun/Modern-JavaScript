let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");  // 요청 초기화
xhr.send();                       // 요청을 서버로 전송

xhr.onreadystatechange = function() {
  // xhr.readyState == 4  : 서버로부터 응답을 모두 받음
  // xhr.status == 200    : 요청 완료
  if(xhr.readyState == 4 && xhr.status == 200){
    let student = JSON.parse(xhr.responseText);
    document.getElementById("result").innerHTML = `
      <h1>${student.name}</h1>
      <ul><li>전공:${student.major}</li><li>학년 : ${student.grade}</li></ul>
    `;
  }
}