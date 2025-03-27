const newP = document.createElement("p");
const textNode = document.createTextNode("Typescript");

newP.appendChild(textNode);

const button = document.querySelector("button");
const javaText = document.querySelectorAll("p")[2];
button.addEventListener("click", ()=>{
  document.body.insertBefore(newP, javaText);
})