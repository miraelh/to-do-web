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
    