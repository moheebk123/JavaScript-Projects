const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".createBtn");
const deleteBtn = document.querySelector(".delete");
let notes = document.querySelectorAll(".input-box");
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.className = "delete";
  img.src = "./assets/delete.jpg";
  img.alt = "Delete Note"
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
document.addEventListener("keyup", (event) => updateStorage());
