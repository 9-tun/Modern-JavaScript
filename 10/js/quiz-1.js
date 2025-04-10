const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

const array = [2, 4, 6, 8, 10];
const table = document.createElement("table");
const resultTable = document.createElement("table");
const row = document.createElement("tr");
const resultRow = document.createElement("tr");

let sum = 0;

for (i = 0; i < array.length; i++){
  const cell = document.createElement("td");
  cell.textContent = array[i];
  row.appendChild(cell);
  sum += array[i];
}
table.appendChild(row);
origin.appendChild(table);

array.push(sum);

for (i = 0; i < array.length; i++){
  const cell = document.createElement("td");
  cell.textContent = array[i];
  resultRow.appendChild(cell);
}

resultTable.appendChild(resultRow);
result.appendChild(resultTable);