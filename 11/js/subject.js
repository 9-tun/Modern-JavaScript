const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();

subjects.forEach(subject => {
  resultList.add(subject);
});

const result = document.querySelector("#result");
result.innerHTML = `
  <ul>
    ${
      [...resultList]                           // 셋 resultList 앞에 ...를 붙여서 배열로 만든다. => ["HTML", "CSS", "자바스크립트", "리액트", "타입스크립트"]
    .map(subject => `<li>${subject}</li>`)      // 배열의 요소를 subject로 하나씩 순회하면서 <li>${subject}</li>를 만들어 새로운 배열을 만든다.
    .join("")                                   // 새로운 배열을 joint으로 모두 합친다 => "<li>HTML</li><li>CSS</li>" 이런 식이 됨
    }                                  
  </ul>
`;
