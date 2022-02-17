var formEl = document.querySelector("#task-form");
var ulTaskEl = document.querySelector("#to-do-tasks");
formEl.addEventListener("submit", addTask);

function addTask() {
    event.preventDefault();

    var liTaskEl = document.createElement("li");
    liTaskEl.textContent = "New Task";
    liTaskEl.className = "task-item";
    ulTaskEl.appendChild(liTaskEl);
}