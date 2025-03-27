const name = document.querySelector("#username");
const major = document.querySelector("#major");
const button = document.querySelector("button");
const table = document.querySelector("#attendant");
const newRow = document.querySelector("tbody");

button.addEventListener("click", (e) => {
  e.preventDefault()

  const item1 = document.createElement("td");
  const item2 = document.createElement("td");
  const tableRow = document.createElement("tr");
  
  item1.innerHTML = `${name.value}`;
  item2.innerHTML = `${major.value}`;
  
  tableRow.appendChild(item1);
  tableRow.appendChild(item2);
  
  newRow.appendChild(tableRow);  

  name.value = "";
  major.value = "";
})
