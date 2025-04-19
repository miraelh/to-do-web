let tasks = [];


const taskInput = document.getElementById("taskToAdd");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; 

    const li = document.createElement("li"); 
    li.classList.add("task"); 
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="remove-btn" onclick="removeTask(this)">🗑️</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleComplete(span) {
    span.parentElement.classList.toggle("completed");
}



function filterTasks(filter) {
    const tasks = taskList.getElementsByTagName("li");

    for (let task of tasks) {
        switch (filter) {
            case "all":
                task.style.display = "flex"; 
                break;
            case "completed":
                task.style.display = task.classList.contains("completed") ? "flex" : "none"; 
                break;
            case "pending":
                task.style.display = task.classList.contains("completed") ? "none" : "flex"; 
                break;
        }
    }

}
    