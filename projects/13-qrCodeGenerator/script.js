const qrInput = document.querySelector("#qr-Input");
const generateBtn = document.querySelector(".generate-Btn");
const dataWrapper = document.querySelector(".generated-Image");
const qrImage = document.querySelector(".qr-Image");

// Set up the request to generate the qr
const generateQR = (qrValue) => {
  dataWrapper.classList.remove("hidden");
  generateBtn.innerText = "Generating...";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=1080X1080&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    generateBtn.innerText = "Generate QR Code";
  });
};

// Handel User Input in the search box
function handleSearch() {
  const qrValue = qrInput.value.trim();
  if (qrValue) {
    generateQR(qrValue);
  }
}

// Listen for Enter key
qrInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    handleSearch();
  }
});

// Listen for click on the search button
generateBtn.addEventListener("click", handleSearch);
