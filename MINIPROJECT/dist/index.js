"use strict";
//Non-Null 단언 연산자
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
//랜더링시에 로컬스토리지의 값을 불러움
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return (JSON.parse(todosJSON));
}
function saveTodos() {
    //로컬에 저장
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function(){
//     alert(input.value)
//     input.value = ""
// })
//타입 단언
// let mystery:unknown = "Hello World!!!"
// const numChars = (mystery as string).length
//타입 단언은 as 외에도 하기와 같은 방법이 있다.
// const input = document.getElementById("todoinput")!;
// (<HTMLInputElement>input).value
