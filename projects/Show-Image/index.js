const cursor = document.getElementById("focus");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - 95 + "px";
  cursor.style.top = e.pageY - 95 + "px";
  cursor.style.display = "block";
});
