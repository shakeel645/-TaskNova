const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const date = document.getElementById("date");
const addTask = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");
const pendingTask = document.getElementById("pendingTask");

const progressBar = document.querySelector(".progress-bar");
const progressPercent = document.getElementById("progressPercent");

let tasks = [];

// ================================
// Load Tasks
// ================================
async function loadTasks() {

    const response = await fetch("/api/tasks");

    tasks = await response.json();

    displayTasks();

}

// ================================
// Dashboard
// ================================
function updateDashboard() {

    let completed = tasks.filter(t => t.completed).length;

    let pending = tasks.length - completed;

    totalTask.textContent = tasks.length;

    completedTask.textContent = completed;

    pendingTask.textContent = pending;

    let percent = tasks.length
        ? Math.round((completed / tasks.length) * 100)
        : 0;

    progressBar.style.width = percent + "%";

    progressPercent.textContent = percent + "%";

}

// ================================
// Display Tasks
// ================================
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        let li = document.createElement("li");

        li.innerHTML = `
        <div class="task-info">
            <h3>${task.title}</h3>

            <p>
                Priority :
                <strong>${task.priority}</strong>

                |

                Due :
                ${task.due_date}
            </p>
        </div>

        <div class="task-actions">

            <button onclick="completeTask(${task.id})">

                ✔

            </button>

            <button onclick="deleteTask(${task.id})">

                🗑

            </button>

        </div>
        `;

        taskList.appendChild(li);

    });

    updateDashboard();

}

loadTasks();
// ================================
// Add Task
// ================================

addTask.addEventListener("click", async () => {

    const title = taskInput.value.trim();

    if(title === ""){

        alert("Please enter a task");

        return;

    }

    await fetch("/api/tasks",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            title:title,

            priority:priority.value,

            due_date:date.value

        })

    });

    taskInput.value="";
    date.value="";

    loadTasks();

});
// ================================
// Delete Task
// ================================

async function deleteTask(id){

    if(!confirm("Delete this task?")){

        return;

    }

    await fetch(`/api/tasks/${id}`,{

        method:"DELETE"

    });

    loadTasks();

}
// ================================
// Complete Task
// ================================

async function completeTask(id){

    const task = tasks.find(t => t.id === id);

    await fetch(`/api/tasks/${id}`,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            title:task.title,

            priority:task.priority,

            due_date:task.due_date,

            completed:!task.completed

        })

    });

    loadTasks();

}