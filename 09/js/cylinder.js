// function Cylinder (cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;

//   this.getVolume = function() {
//     let radius = this.diameter/2;
//     return (Math.PI * radius * radius * this.height).toFixed(2); // 소수점 둘째 자리까지 반올림
//   };
// }

// 클래스를 사용해 봅시다.
class Cylinder {
  constructor(cylinderDiameter, cylinderHeight){
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume = function(){
    let radius = this.diameter/2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

// let cylinder = new Cylinder(8, 10);
// console.log(`원기둥 부피는 ${cylinder.getVolume()}입니다.`);
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", function(event){
  event.preventDefault(); //새로 고침 방지

  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if(diameter === "" || height === ""){
    result.innerText = `지름과 높이를 입력하세요.`;
  }
  else {
    let cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기중의 부피는 ${cylinder.getVolume()}입니다.`;
  }
})