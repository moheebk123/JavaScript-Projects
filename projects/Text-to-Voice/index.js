const speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelector = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, index) =>
      (voiceSelector.options[index] = new Option(voice.name, index))
  );
};

document.querySelector("button").onclick = () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
};

voiceSelector.addEventListener(
  "change",
  () => (speech.voice = voices[voiceSelector.value])
);
