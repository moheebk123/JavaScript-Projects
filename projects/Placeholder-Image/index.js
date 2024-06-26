const select = document.querySelector("select");
let inputAll = document.querySelectorAll("input");
const placeholderImage = document.querySelector("img");
const imageURL = document.querySelector(".link-box");

let urlObj = {};

const copyURL = () => navigator.clipboard.writeText(event.target.innerText);

const removeHashTag = (string) => {
  return string.replace("#", "");
};

const addPlus = (string) => {
  return string.split(" ").join("+");
};

const createImagePath = () => {
  urlObj.size = select.value;
  urlObj.text = addPlus(inputAll[0].value);
  urlObj.bgClr = removeHashTag(inputAll[1].value);
  urlObj.txtClr = removeHashTag(inputAll[2].value);

  if (inputAll[0].value === "") {
    urlObj.text = urlObj.size;
  }

  let url = `http://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`;
  placeholderImage.src = url;
  imageURL.innerText = url;
};

select.addEventListener("change", createImagePath);
inputAll.forEach((input) => {
  input.addEventListener("keyup", createImagePath);
  input.addEventListener("change", createImagePath);
});
