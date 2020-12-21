var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var addItem = function() {
    var newItemEl = document.createElement("li");
    newItemEl.className = "task-item";
    newItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(newItemEl);
};

buttonEl.addEventListener("click", addItem);