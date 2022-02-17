var buttonEl = document.querySelector("#save-task");
var ulTaskEl = document.querySelector("#to-do-tasks");
buttonEl.addEventListener("click", addTask);

function addTask() {
    var liTaskEl = document.createElement("li");
    liTaskEl.textContent = "New Task";
    liTaskEl.className = "task-item";
    ulTaskEl.appendChild(liTaskEl);
}