const colorDislpay = document.getElementById("colorDisplay");
const colorCode = document.getElementById("colorCode");
const resetColor = document.getElementById("resetBtn");
const resetIcon = resetColor.querySelector("i");

const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let rotationAngle = 0;

resetColor.addEventListener("click", () => {
  let hexColor = "#";

  for (let index = 0; index < 6; index++) {
    hexColor += hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  colorDislpay.style.backgroundColor = hexColor;
  colorCode.textContent = hexColor;

  rotationAngle += 180;
  resetIcon.style.transform = `rotate(${rotationAngle}deg)`;
});

// Copy to clipboard functionality
colorCode.addEventListener("click", () => {
  const hex = colorCode.textContent;

  navigator.clipboard.writeText(hex).then(() => {
    colorCode.textContent = "Copied";
    setTimeout(() => {
      colorCode.textContent = hex;
    }, 1000);
  });
});
  