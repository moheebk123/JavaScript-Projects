const container = document.querySelector(".container");
const taskBox = document.querySelector("#task-box");
const white = "#bbb";
const orangered = "orangered";

function showData() {
  taskBox.innerHTML = localStorage.getItem("task");
}

function saveData() {
  localStorage.setItem("task", taskBox.innerHTML);
  showData();
}
window.onload = showData();

// Add tasks in list
const addTask = () => {
  let inputTask = document.getElementById("input-task");
  const list = `<div class="list">
    <button class="check">
      <i class="fa-solid fa-check"></i>
    </button>
    <label class="task" for="task1">${inputTask.value}</label>
    <button class="deletebtn">
      <i class="fa-solid fa-xmark"></i>
    </button>
    </div>`;
  if (inputTask != "") {
    taskBox.insertAdjacentHTML("beforeend", list);
    inputTask.value = "";
  } else {
    alert("You must have write something.");
  }
  saveData();
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  } else if (event.key === "Delete") {
    taskBox.firstElementChild.remove();
    saveData();
  }
});

taskBox.addEventListener("click", (event) => {
  // Check task
  if (event.target.classList.contains("fa-check")) {
    const list = event.target.closest(".list");
    const label = list.querySelector("label");

    if (event.target.parentElement.style.backgroundColor == orangered) {
      event.target.parentElement.style.backgroundColor = white;
      label.style.textDecoration = "none";
    } else {
      event.target.parentElement.style.backgroundColor = orangered;
      label.style.textDecoration = "line-through";
    }
    // Remove task
  } else if (event.target.classList.contains("fa-xmark")) {
    const list = event.target.closest(".list");
    list.remove();
  }
  saveData();
});
