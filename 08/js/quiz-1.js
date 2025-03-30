const button = document.querySelector("#bttn");
  
button.addEventListener("click", (e) => {
  e.preventDefault();

  const year = document.querySelector("#year").value;
  const month = document.querySelector("#month").value;
  const date = document.querySelector("#date").value;

  let birth = new Date(`${year}-${month}-${date}`);
  let today = new Date();

  //console.log(birth.toDateString());
  //console.log(today.toDateString);

  const current = document.querySelector("#current");
  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");

  let passedTime = today.getTime() - birth.getTime();
  let passedDays = Math.round(passedTime/1000/60/60/24);
  let passedHours = Math.round(passedTime/1000/60/60);

  current.innerHTML = `${today.toString()}`;
  days.innerHTML = `날짜로는 ${passedDays}일이 흐르고,`;
  hours.innerHTML = `시간으로는 ${passedHours} 시간이 흘렀습니다.`;
})