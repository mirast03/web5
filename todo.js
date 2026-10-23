// All tasks are stored in this array (no localStorage, no database).
// Every task is an object: { title: "...", description: "...", done: false }
let tasks = [];

const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const errorMessage = document.getElementById("errorMessage");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


// Draw the whole list on the page from the tasks array
function showTasks() {
  taskList.innerHTML = ""; // clear the old list

  // show the "No tasks yet" text only when the array is empty
  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    // card for one task
    const card = document.createElement("div");
    card.className = "task-card";
    if (task.done === true) {
      card.classList.add("done"); // CSS adds the strike-through effect
    }

    // top line: title + buttons
    const header = document.createElement("div");
    header.className = "task-header";

    const title = document.createElement("h3");
    title.textContent = task.title;

    const doneBtn = document.createElement("button");
    doneBtn.className = "small-btn";
    if (task.done === true) {
      doneBtn.textContent = "Undo";
    } else {
      doneBtn.textContent = "Complete";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "small-btn delete-btn";
    deleteBtn.textContent = "Delete";

    // description under the title
    const description = document.createElement("p");
    description.textContent = task.description;

    // buttons work with the task number i
    doneBtn.addEventListener("click", function () {
      toggleTask(i);
    });

    deleteBtn.addEventListener("click", function () {
      deleteTask(i);
    });

    header.appendChild(title);
    header.appendChild(doneBtn);
    header.appendChild(deleteBtn);
    card.appendChild(header);
    card.appendChild(description);
    taskList.appendChild(card);
  }
}


// Add a new task to the array
function addTask() {
  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  // both fields are required (they are marked with *)
  if (title === "" || description === "") {
    errorMessage.textContent = "Please fill in both Title and Description.";
    return;
  }

  errorMessage.textContent = "";
  tasks.push({ title: title, description: description, done: false });

  titleInput.value = "";
  descInput.value = "";
  showTasks();
}


// Mark a task as completed / not completed
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  showTasks();
}


// Remove a task from the array
function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}


addTaskBtn.addEventListener("click", addTask);

showTasks();
