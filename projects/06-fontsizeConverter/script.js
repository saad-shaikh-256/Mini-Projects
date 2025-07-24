const pxValue = document.getElementById("px-Input");
const remValue = document.getElementById("rem-Input");

pxValue.addEventListener("input", () => {
  remValue.value = (pxValue.value / 16).toFixed(2);
});

remValue.addEventListener("input", () => {
  pxValue.value = (remValue.value * 16).toFixed(2);
});
