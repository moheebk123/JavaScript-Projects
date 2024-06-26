const display = document.getElementById("display");
const calculate = () => (display.value = eval(display.value));

display.addEventListener("keydown", (event) => {
  event.preventDefault();

  const key = event.key;

  const lastValue =
    display.value.length == 0 ? " " : display.value[display.value.length - 1];

  if (key.match(/^[0-9]$/)) {
    display.value += key;
  } else if (key.match(/^[+\-*/]$/)) {
    if (
      lastValue != "+" &&
      lastValue != "-" &&
      lastValue != "*" &&
      lastValue != "/"
    ) {
      display.value += key;
    }
  } else if (key == "c" || key == "C") {
    display.value = "";
  } else if (key === "=" || key === "Enter") {
    if (
      lastValue != "+" &&
      lastValue != "-" &&
      lastValue != "*" &&
      lastValue != "/"
    ) {
      calculate();
    }
  } else if (key === "Backspace") {
    display.value = display.value.toString().slice(0, -1);
  } else if (!key.match(/^[0-9+\-*/]$/)) {
    return;
  }

  return;
});
