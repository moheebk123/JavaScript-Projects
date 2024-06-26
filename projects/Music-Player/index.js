const musicProgress = document.getElementById("music-progress");
const song = document.getElementById("song");
const musicControl = document.getElementById("music-control");
const menu = document.getElementById("menu");
const musicList = document.getElementById("music-list");
const musicName = document.getElementById("music-name");
const musicImage = document.querySelector("img");
const playPauseBtn = document.getElementById("play-pause");

song.pause();

const musicData = () => {
  musicProgress.max = song.duration;
  song.currentTime = 0;
  musicProgress.value = song.currentTime;
};

musicProgress.onchange = () => {
  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
  song.currentTime = musicProgress.value;
  song.play();
};

const navigation = () => {
  if (event.target.classList.contains("fa-bars")) {
    menu.style.transform = "rotate(90deg)";
    musicList.style.left = 0;
    event.target.classList.remove("fa-bars");
    event.target.classList.add("fa-xmark");
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
    // musicData();
    song.pause();
  } else {
    menu.style.transform = "rotate(0)";
    musicList.style.left = "-235px";
    event.target.classList.remove("fa-xmark");
    event.target.classList.add("fa-bars");
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
    // musicData();
    song.play();
  }
};

const changeMusic = () => {
  if (event.target.innerText == "Mujhe Pyaar Hua Tha") {
    menu.style.transform = "rotate(0)";
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
    musicList.style.left = "-235px";
    musicName.innerText = event.target.innerText;
    musicImage.src = "./assets/image2.jpg";

    song.src = "./assets/song1.mp3";

    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");

    musicData();
    song.play();
  } else if (event.target.innerText == "Mere Humsafar") {
    menu.style.transform = "rotate(0)";
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
    musicList.style.left = "-235px";
    musicName.innerText = event.target.innerText;
    musicImage.src = "./assets/image1.jpg";

    song.src = "./assets/song2.mp3";

    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");

    musicData();
    song.play();
  }
};

const musicControls = () => {
  if (event.target.classList.contains("fa-play")) {
    setInterval(() => (musicProgress.value = song.currentTime), 500);

    song.play();
    event.target.classList.remove("fa-play");
    event.target.classList.add("fa-pause");
  } else if (event.target.classList.contains("fa-pause")) {
    song.pause();
    event.target.classList.remove("fa-pause");
    event.target.classList.add("fa-play");
  } else if (event.target.classList.contains("fa-backward")) {
    song.currentTime -= 10;
    musicProgress.value = song.currentTime;
  } else if (event.target.classList.contains("fa-forward")) {
    song.currentTime += 10;
    musicProgress.value = song.currentTime;
  } else if (event.target.classList.contains("fa-forward-step")) {
    if (musicName.innerText == "Mujhe Pyaar Hua Tha") {
      musicName.innerText = "Mere Humsafar";
      musicImage.src = "./assets/image1.jpg";
      song.src = "./assets/song2.mp3";
      playPauseBtn.classList.remove("fa-play");
      playPauseBtn.classList.add("fa-pause");
      musicData();
      song.play();
    }
  } else if (event.target.classList.contains("fa-backward-step")) {
    if (musicName.innerText == "Mere Humsafar") {
      musicName.innerText = "Mujhe Pyaar Hua Tha";
      musicImage.src = "./assets/image2.jpg";
      song.src = "./assets/song1.mp3";
      playPauseBtn.classList.remove("fa-play");
      playPauseBtn.classList.add("fa-pause");
      musicData();
      song.play();
    }
  }
};

musicControl.addEventListener("click", musicControls);

menu.addEventListener("click", navigation);

musicList.addEventListener("click", changeMusic);

song.addEventListener("loadedmetadata", musicData);
