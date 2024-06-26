const musicProgress = document.getElementById("music-progress");
const soundProgress = document.getElementById("sound-progress");
let song = document.getElementById("song");
const musicControl = document.getElementById("music-control");
const menu = document.getElementById("menu");
const musicList = document.getElementById("music-list");
const musicName = document.getElementById("music-name");
const playPauseBtn = document.getElementById("play-pause");
const volumeBtn = document.getElementById("volume-btn");
const playTypeIcon = document.getElementById("play-type-icon");
const playTypeText = document.getElementById("play-type-text");
const fileUpload = document.getElementById("upload-file");
const totalDuration = document.getElementById("total-duration");
const curTime = document.getElementById("current-time");

let musicFiles = [];
let musicNames = [];

const playTypeIcons = [
  "fa-arrows-up-to-line",
  "fa-repeat",
  "fa-rotate",
  "fa-shuffle",
];

let currPlayTypeIcon = 0;

const musicData = () => {
  musicProgress.max = song.duration;
  song.currentTime = 0;
  musicProgress.value = song.currentTime;
  const songDuration = song.duration.toFixed(2);
  const min = Math.floor(songDuration / 60);
  const sec = (songDuration % 60).toFixed(0);
  totalDuration.innerText = `${min}:${sec}`;
  setInterval(() => {
    const curSongTime = parseFloat(song.currentTime.toFixed(2));
    const min = Math.floor(curSongTime / 60);
    const sec = (curSongTime % 60).toFixed(0);
    curTime.innerText = `${min}:${sec}`;
  }, 500);
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
  playTypeIcons.forEach((type) => playTypeIcon.classList.remove(type));
  if (currPlayTypeIcon < playTypeIcons.length - 1) {
    currPlayTypeIcon++;
    playTypeIcon.classList.add(playTypeIcons[currPlayTypeIcon]);
    if (currPlayTypeIcon == 1) {
      playTypeText.innerText = "Loop All";
    } else if (currPlayTypeIcon == 2) {
      playTypeText.innerText = "Loop Current";
    } else if (currPlayTypeIcon == 3) {
      playTypeText.innerText = "Shuffle Play";
    }
  } else if (currPlayTypeIcon == playTypeIcons.length - 1) {
    currPlayTypeIcon = 0;
    playTypeIcon.classList.add(playTypeIcons[currPlayTypeIcon]);
    playTypeText.innerText = "Play All";
  }
};

const playType = () => {
  if (musicNames.length == 0 && musicFiles.length == 0) {
    musicData();
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
    if (currPlayTypeIcon == 1 || currPlayTypeIcon == 2) {
      song.play();
      playPauseBtn.classList.remove("fa-play");
      playPauseBtn.classList.add("fa-pause");
    }
  } else {
    if (currPlayTypeIcon == 0) {
      if (musicName.className == "sample-music") {
        musicName.className = "0";
        musicName.innerText = musicNames[0];
        song.src = musicFiles[0];
        musicData();
        song.play();
      } else {
        let curMusicIndex = Number(musicName.className);
        if (curMusicIndex < musicNames.length - 1) {
          curMusicIndex++;
          musicName.className = String(curMusicIndex);
          musicName.innerText = musicNames[curMusicIndex];
          song.src = musicFiles[curMusicIndex];
          musicData();
          song.play();
        } else if (curMusicIndex == musicNames.length - 1) {
          musicName.innerText = "Mujhe Pyaar Hua Tha";
          musicName.className = "sample-music";
          song.src = "./assets/song.mp3";
          musicData();
          playPauseBtn.classList.remove("fa-pause");
          playPauseBtn.classList.add("fa-play");
        }
      }
    } else if (currPlayTypeIcon == 1) {
      if (musicName.className == "sample-music") {
        musicName.className = "0";
        musicName.innerText = musicNames[0];
        song.src = musicFiles[0];
        musicData();
        song.play();
      } else {
        let curMusicIndex = Number(musicName.className);
        if (curMusicIndex < musicNames.length - 1) {
          curMusicIndex++;
          musicName.className = String(curMusicIndex);
          musicName.innerText = musicNames[curMusicIndex];
          song.src = musicFiles[curMusicIndex];
          musicData();
          song.play();
        } else if (curMusicIndex == musicNames.length - 1) {
          musicName.innerText = "Mujhe Pyaar Hua Tha";
          musicName.className = "sample-music";
          song.src = "./assets/song.mp3";
          musicData();
          song.play();
        }
      }
    } else if (currPlayTypeIcon == 2) {
      song.play();
    } else if (currPlayTypeIcon == 3) {
      const curMusicIndex = Math.floor(Math.random() * musicFiles.length);
      musicName.className = String(curMusicIndex);
      musicName.innerText = musicNames[curMusicIndex];
      song.src = musicFiles[curMusicIndex];
      musicData();
      song.play();
    }
  }
};

const addMusic = () => {
  let newMusicName = fileUpload.files[0].name;
  newMusicName = newMusicName.substr(0, newMusicName.length - 4);
  if (!musicNames.includes(newMusicName)) {
    musicFiles.push(URL.createObjectURL(fileUpload.files[0]));
    musicNames.push(newMusicName);

    musicName.innerText = musicNames[musicNames.length - 1];
    musicName.className = String(musicNames.length - 1);
    song.src = musicFiles[musicFiles.length - 1];
    musicData();

    const userMusics = musicList.querySelector("#user-musics");
    userMusics.innerHTML = "";
    musicNames.forEach((music, index) => {
      const musicHTML = `<div class="music" id="${index}">${music} <i class="fa-solid fa-xmark delete-music"></i></div>`;
      userMusics.insertAdjacentHTML("beforeend", musicHTML);
    });
  } else {
    alert("Already uploaded choose another.");
  }
};

const deleteMusic = (event) => {
  const music = event.target.closest(".music");
  const musicIndex = Number(music.id);
  musicFiles.splice(musicIndex, 1);
  musicNames.splice(musicIndex, 1);
  music.remove();
};

const changeMusic = (event) => {
  if (event.target.id == "sample-music") {
    menu.style.transform = "rotate(0)";
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
    musicList.style.left = "-235px";
    musicName.innerText = event.target.innerText;
    musicName.className = "sample-music";
    song.src = "./assets/song.mp3";
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
    musicData();
  } else if (event.target.id == "upload-music") {
    fileUpload.click();
  } else if (event.target.classList.contains("music")) {
    menu.style.transform = "rotate(0)";
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
    musicList.style.left = "-235px";
    const index = event.target.id;
    musicName.innerText = musicNames[Number(index)];
    musicName.className = index;
    song.src = musicFiles[index];
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
    musicData();
  } else if (event.target.classList.contains("delete-music")) {
    deleteMusic(event);
  }
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

song.addEventListener("loadedmetadata", musicData);

song.addEventListener("ended", playType);

playTypeIcon.addEventListener("click", changePlayType);

fileUpload.addEventListener("change", addMusic);

musicList.addEventListener("click", changeMusic);
