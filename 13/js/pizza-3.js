const pizza = () =>{
 return new Promise((resolve, reject)=>{
  resolve("피자를 주문합니다.");
 });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("피자 도우 준비");
    },3000)
  });
}

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("토핑 완료");
    },1000)
  })
}

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("굽기 완료");
    },2000)
  })
}

// pizza()
//   .then(result => step1(result))                          /* pizza()가 성공 시, step1 호출 */
//   .then(result => step2(result))                          /* step1()가 성공 시, step2 호출 */
//   .then(result => step3(result))                          /* step2()가 성공 시, step3 호출 */
//   .then((result) => {console.log(result)})                /* step3()가 성공 시, step3에서 반환한 Promise의 resolve 매개인자를 콘솔에 표시  */
//   .then(()=>{console.log("피자가 준비되었습니다.")});     /* then 안에서 아무것도 리턴하지 않으면, 자동으로 Promise.resolve(undefined)가 되어 다음 .then()으로 넘어갈 수 있습니다. */

pizza()
  .then(step1)                     
  .then(step2)                     
  .then(step3)                     
  .then(console.log)               
  .then(()=>{console.log("피자가 준비되었습니다.")});