let inputImage = document.getElementById("input-file");
let profileImage = document.getElementById("profileImage");
const card = document.getElementById("card");

const changeImage = () => {
  let imgLInk = URL.createObjectURL(inputImage.files[0]);
  profileImage.src = imgLInk;
};

inputImage.addEventListener("change", changeImage);

card.addEventListener("dragover", (e) => e.preventDefault());

card.addEventListener("drop", (e) => {
  e.preventDefault();
  inputImage.files = e.dataTransfer.files;
  changeImage();
});
