const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrvalue = qrInput.value;
  if (!qrvalue) {
    return alert("لطفا متن یا آدرس وارد کن");
  }
  generateBtn.innerHTML = "در حال دریافت QR CODE";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generateBtn.innerHTML = "تولید QR CODE";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
  }
});
