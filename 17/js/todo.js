const todoInput = document.querySelector(`#todo-input`);  // 사용자 입력
const addButton = document.querySelector(`#add-button`);  // [추가] 버튼
const todoList = document.querySelector(`#todo-list`);    // 할 일 목록

// 이벤트 처리
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener(`click`, addTodo);
todoList.addEventListener(`click`, manageTodo);

function addTodo(e){
  e.preventDefault(); // 기본 동작을 취소합니다.

  // 새로운 내용 추가
  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodo = document.createElement(`li`);
  newTodo.innerText = todoInput.value;
  newTodo.classList.add(`todo-content`);
  newDiv.appendChild(newTodo);

  // 아래 코드를 js에서 짜보겠습니다.
  // <div class = "todo">
  //   <li class = "todo-content">내용</li>
  //   <button class = "complete-button">완료</button>
  //   <button class = "delete-button">삭제</button>
  // </div>

  // 내용 오른쪽에 버튼 추가
  const completeButton = document.createElement('button');  // 버튼을 만든다.
  completeButton.innerText = '완료';                        // 완료라고 버튼에 쓴다.
  completeButton.classList.add('complete-button');          // 버튼에 클래스를 추가한다.
  newDiv.appendChild(completeButton);                       // 버튼을 newDiv에 넣는다.

  const deleteButton = document.createElement('button');  // 버튼을 만든다.
  deleteButton.innerText = '삭제';                        // 삭제라고 버튼에 쓴다.
  deleteButton.classList.add('delete-button');            // 버튼에 클래스를 추가한다.
  newDiv.appendChild(deleteButton);                       // 버튼을 newDiv에 넣는다.

  saveToLocal(todoInput.value);                           // 로컬 스토리지에 저장합니다.

  todoList.appendChild(newDiv);                           // todoList에 newDiv를 넣는다.
  todoInput.value = ""; // 입력 초기화                    // 텍스트 입력창 비우기
}

function saveToLocal(todo){
  let todos;  
  // todos라는 key로 저장된 값을 가져옴 (문자열 반환)
  if(localStorage.getItem('todos') === null){
    todos = [];                                           // 값이 없으며 빈 배열로 초기화
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));    // 문자열을 자바스크립트 배열 객체로 변환
  }
  todos.push(todo);                                       // Text로 입력받은 할 일을 todos에 추가
  localStorage.setItem('todos', JSON.stringify(todos));   // 문자열로 바꿔서 todos key의 값으로 localStorage에 추가
}

function getLocal(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));    // 스토리지에서 todos 값을 가져옵니다.
  }  

  // 배열의 각 todo 항목에 대해 화면에 표시
  todos.forEach(function(todo) {
    // <div class="todo"> 생성
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    // <li class="todo-content">todo 텍스트</li> 생성
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);

    // 완료 버튼 생성 및 추가
    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);

    // 삭제 버튼 생성 및 추가
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);   // 완성된 todo 요소를 todoList에 추가
    todoInput.value = "";           // 입력창 초기화
  })
}

function manageTodo(e){
  // 클릭한 버튼의 클래스명 확인
  const whichButton = e.target.classList[0];
  if(whichButton === 'complete-button'){
    // 완료 버튼이면 해당 todo 항목에 'completed' 클래스 토글(클래스를 추가하거나 제거, 여기서는 추가)              
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle('completed');  
  } else if(whichButton === 'delete-button'){
    // 삭제 버튼이면 해당 todo 항목 삭제 로직 호출
    const todo = e.target.parentElement;
    removeLocal(todo);    // 로컬 스토리지에서 삭제
    todo.remove();        // 화면에서 삭제
  }
}
function removeLocal(todo){
  let todos;
  // localStorage에 'todos'가 없으면 빈 배열로 초기화
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
     // 있으면 JSON 문자열을 배열로 변환
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  // 삭제 대상 확인용 로그 출력
  // console.log(todo);

  const index = todos.indexOf(todo.children[0].innerText);  // 삭제할 todo의 index
  // console.log(index);
  todos.splice(index, 1); // index번째 요소를 삭제
  localStorage.setItem('todos',JSON.stringify(todos));  // 변경된 todos 저장
}
