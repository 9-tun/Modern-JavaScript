class Lecture {
  constructor(hasTutor, lectID, members){
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

let lec1 = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);
let lec2 = new Lecture(true, "L002", ["Lee", "Choi", "Kim"]);

function getStudents(lec){
  let {hasTutor, lectID, members} = lec;  // 배열을 구조 분해 할당
  let tutor, students;

  if(lec.hasTutor === true){
      [...students] = members;
  }
  else{
    [tutor, ...students] = members;
  }
  return students
}

console.log(`강의: ${lec1.lectID}, 수강생: ${getStudents(lec1)}`);
console.log(`강의: ${lec2.lectID}, 수강생: ${getStudents(lec2)}`);