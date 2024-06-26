const qrText = document.querySelector("input");
const qrCode = document.querySelector("img");
const qrBox = document.getElementById("qr-box");

const generateQR = () => {
  qrBox.style.border = "1px solid #d1d1d1";
  qrBox.style.maxHeight = "fit-content";
  qrCode.style.opacity = 1;
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
};
