let tasks = [];


const taskInput = document.getElementById("taskToAdd");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; }

    const li = document.createElement("li"); 