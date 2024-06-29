const musicProgress = document.getElementById("music-progress");
const soundProgress = document.getElementById("sound-progress");
let song = document.getElementById("song");
const musicControl = document.getElementById("music-control");
const menu = document.getElementById("menu");
const musicList = document.getElementById("music-list");
const musicName = document.getElementById("music-name");
const musicImage = document.querySelector("img");
const playPauseBtn = document.getElementById("play-pause");
const volumeBtn = document.getElementById("volume-btn");
const playType = document.getElementById("play-type");
const fileUpload = document.getElementById("upload-file");
const uploadMusic = document.getElementById("upload-music");
let musics = document.querySelectorAll(".music");

let musicFiles = [];
let musicNames = [];
let musicIndex;

const playTypes = [
  "fa-arrows-up-to-line",
  "fa-repeat",
  "fa-rotate",
  "fa-shuffle",
];

let currPlayType = 0;

const musicData = () => {
  musicProgress.max = song.duration;
  song.currentTime = 0;
  musicProgress.value = song.currentTime;
};

musicProgress.onchange = () => {
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
  song.currentTime = musicProgress.value;
  song.play();
};

soundProgress.oninput = () => {
  song.volume = soundProgress.value / 100;
};

const navigation = () => {
  if (event.target.classList.contains("fa-bars")) {
    menu.style.transform = "rotate(90deg)";
    musicList.style.left = 0;
    event.target.classList.remove("fa-bars");
    event.target.classList.add("fa-xmark");
  } else {
    menu.style.transform = "rotate(0)";
    musicList.style.left = "-235px";
    event.target.classList.remove("fa-xmark");
    event.target.classList.add("fa-bars");
  }
};

const changePlayType = () => {
  playTypes.forEach((type) => playType.classList.remove(type));
  if (currPlayType < playTypes.length - 1) {
    currPlayType++;
    playType.classList.add(playTypes[currPlayType]);
  } else if (currPlayType == playTypes.length - 1) {
    currPlayType = 0;
    playType.classList.add(playTypes[currPlayType]);
  }
};

const changeImage = () => {
  if ((musicImage.src = "./assets/image2.jpg")) {
    musicImage.src = "./assets/image1.jpg";
  } else {
    musicImage.src = "./assets/image2.jpg";
  }
};

const addMusic = () => {
  let newMusicName = fileUpload.files[0].name;
  newMusicName = newMusicName.substr(0, newMusicName.length - 4);
  if (!musicNames.includes(newMusicName)) {
    musicFiles.push(URL.createObjectURL(fileUpload.files[0]));
    musicNames.push(newMusicName);

    musicName.innerText = musicNames[musicNames.length - 1];
    musicName.className = String(musicNames.length - 1)
    song.src = musicFiles[musicFiles.length - 1];
    musicData();

    changeImage();

    const userMusics = musicList.querySelector('#user-musics')
    userMusics.innerHTML = ""
    musicNames.forEach((music, index) => {
      const musicHTML = `<div class="music" id="${index}">${music}</div>`;
      userMusics.insertAdjacentHTML("beforeend", musicHTML);
    });
    musics = document.querySelectorAll(".music");
  } else {
    alert("Already uploaded choose another.");
  }
};

const changeMusic = (event) => {
  menu.style.transform = "rotate(0)";
  menu.classList.remove("fa-xmark");
  menu.classList.add("fa-bars");
  musicList.style.left = "-235px";
  if (event.target.id == "sample-music") {
    musicName.innerText = event.target.innerText;
    musicName.className = "sample-music";
    musicImage.src = "./assets/image2.jpg";
    song.src = "./assets/song.mp3";
  } else {
    const index = event.target.id;
    musicName.innerText = musicNames[Number(index)];
    musicName.className = index;
    song.src = musicFiles[index];

    changeImage();
  }
  playPauseBtn.classList.remove("fa-pause");
  playPauseBtn.classList.add("fa-play");
  musicData();
};

const musicControls = (event) => {
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
    if (musicName.className == "sample-music" && musicNames.length > 0) {
      song.src = musicFiles[0];
      musicName.innerText = musicNames[0];
      musicName.className = "0";
    } else {
      let curMusicIndex = Number(musicName.className);
      if (curMusicIndex < musicNames.length - 1) {
        curMusicIndex++;
        song.src = musicFiles[curMusicIndex];
        musicName.innerText = musicNames[curMusicIndex];
        musicName.className = String(curMusicIndex);
      } else if (curMusicIndex == musicNames.length - 1) {
        song.src = "./assets/song.mp3";
        musicName.innerText = "Mujhe Pyaar Hua Tha";
        musicName.className = "sample-music";
      }
    }
    changeImage();
    musicData();
    song.play();
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
    setInterval(() => (musicProgress.value = song.currentTime), 500);
  } else if (event.target.classList.contains("fa-backward-step")) {
    if (musicName.className == "sample-music" && musicNames.length > 0) {
      song.src = musicFiles[musicFiles.length - 1];
      musicName.innerText = musicNames[musicNames.length - 1];
      musicName.className = String(musicNames.length - 1);
    } else {
      let curMusicIndex = Number(musicName.className);
      if (curMusicIndex == 0) {
        song.src = "./assets/song.mp3";
        musicName.innerText = "Mujhe Pyaar Hua Tha";
        musicName.className = "sample-music";
      } else if (curMusicIndex > 0) {
        curMusicIndex--;
        song.src = musicFiles[curMusicIndex];
        musicName.innerText = musicNames[curMusicIndex];
        musicName.className = String(curMusicIndex);
      }
    }
    changeImage();
    musicData();
    song.play();
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
    setInterval(() => (musicProgress.value = song.currentTime), 500);
  }
};

volumeBtn.addEventListener("click", () => {
  if (soundProgress.classList.contains("active")) {
    soundProgress.classList.remove("active");
  } else {
    soundProgress.classList.add("active");
  }
});

musicControl.addEventListener("click", musicControls);

menu.addEventListener("click", navigation);

musicList.addEventListener("click", changeMusic);

song.addEventListener("loadedmetadata", musicData);

song.addEventListener("ended", () => {
  console.log("ended");
});

playType.addEventListener("click", changePlayType);

uploadMusic.addEventListener("click", () => fileUpload.click());

fileUpload.addEventListener("change", addMusic);

musics.forEach((music) => {
  music.addEventListener("click", (event) => changeMusic(event));
});
