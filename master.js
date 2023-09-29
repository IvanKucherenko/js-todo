"use strict";
let input = document.querySelector("input");
let myBtn = document.getElementById("btn");
let taskList = document.querySelector(".todo-list");

myBtn.addEventListener('click', () => {
    let text = input.value;
    let task = createTask(text);
    if (text.length > 0) {
        if (!isNaN(text)) {
            return null;
        } else {
            task.innerHTML += "<span class='del'><i>&#x2718;</i></span>";
            taskList.appendChild(task);
            input.value = "";
        }
    }
}
);

taskList.addEventListener("click", (e) => {
    if (e.target.nodeName === "span") {
        e.target.parentElement.parentElement.style = "display:none";
    }
    if (e.target.nodeName === "LI") {
        e.target.classList.toggle("done");
    }
});

taskList.addEventListener("click", (e) => {
    if (e.target.nodeName === "I") {
        e.target.parentElement.parentElement.remove();
    }
})


function createTask(text) {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
}