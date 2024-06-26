const textArea = document.querySelector("#text-area");
const character = document.querySelector("#character");
const word = document.querySelector("#word");
let charCounter = 0;
let wordCounter = 1;
var specialKeys = [
  "Enter",
  "Delete",
  "Shift",
  "Control",
  "Alt",
  "AltGraph",
  "CapsLock",
  "Tab",
  "Backspace",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
  "MediaTrackNext",
  "MediaTrackPrev",
  "MediaTrack",
  "MediaPlayPause",
  "AudioVolumeUp",
  "AudioVolumeDown",
  "AudioVolumeMute",
  "Meta",
  "Escape",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Page",
  "NumLock",
];

textArea.addEventListener("keydown", (event) => {
  if (!specialKeys.includes(event.key)) {
    charCounter++;
    character.innerHTML = charCounter;
    word.innerHTML = wordCounter;

    if (event.key == " " && textArea.value[textArea.value.length - 1] != " ") {
      const words = textArea.value.split(" ");
      let emptyElements = 0;

      words.forEach((element) => {
        if (element == "") emptyElements++;
      });

      wordCounter = words.length - emptyElements;
      word.innerHTML = wordCounter;
    }
  } else if (event.key == "Backspace") {
    if (charCounter > 0) {
      charCounter--;
      character.innerHTML = charCounter;

      if (textArea.value[textArea.value.length - 1] == " ") {
        wordCounter--;
        word.innerHTML = wordCounter;
      }
    }
  }
});
