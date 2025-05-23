let students = ["Kim", "Lee", "Park"];
console.log(`현재 students: ${students}`);

// 스토리지의 students 키에 배열을 저장합니다.
localStorage.setItem("students", JSON.stringify(students));

// 로컬 스토리지에서 가져와서 값을 추가한 후 다시 저장합시다.
let localData;
if(localStorage.getItem("students") === null){
  localData = [];
} else{
  localData = JSON.parse(localStorage.getItem("students")); // 스토리지 값을 localData(배열)로 저장
}

localData.push("Choi"); // 배열에 요소 추가
localStorage.setItem("students", JSON.stringify(localData));

console.log(`추가 후 students: ${localData}`);

// 이번에는 "Lee"를 삭제해 봅시다.
const indexOfValue = localData.indexOf("Lee");  // 인덱스 탐색
localData.splice(indexOfValue, 1);              // 인덱스에 해당하는 값부터 1개 삭제
localStorage.setItem("students", JSON.stringify(localData));
console.log(`삭제 후 students: ${localData}`);

localStorage.removeItem("students");            // 키 삭제