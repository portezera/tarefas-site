const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input0");
const todoList = document.querySelector("#todo-list");
const editform =  document.querySelector("#edit-form");
const editImput =  document.querySelector("#edit-input");
const cancelEditBtn =  document.querySelector("#cancel-btn");
const searchinput = document.querySelector("#search-input");
const eraseBtn= document.querySelector("erase-button");
const silterBtn=document.querySelector("#filter-select");

    const saveTudo = (text, done =0, save=1) =>{
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText=text;
    todo.appendChild(dineBtn);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML='<i class="fa-solid fa-pen"></i>;
    todo.appendChild(doneBtn);

    const editBtn=document.createElement("button");
    editBtn.classList.add("edit-todo");
    editiBtn.innerHTML='<i'
}