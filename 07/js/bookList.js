const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
  e.preventDefault(); /* 폼 버튼을 클릭했을 때 서버로 보내지 않음 */

  const item = document.createElement("li");
  item.innerHTML = `${title.value} - ${author.value} <span class="delButton">삭제</span>`;
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons){
    delButton.addEventListener("click", function() {
      this.parentNode.remove();
    })
  }
})

