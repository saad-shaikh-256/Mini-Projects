const coin = document.querySelector("#coin-Container");
const flipBtn = document.querySelector("#flip-button");
const resetBtn = document.querySelector("#reset-button");
const headsCount = document.querySelector("#heads-Counter");
const tailsCount = document.querySelector("#tails-Counter");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
  const isHeads = Math.random() < 0.5;

  coin.style.animation = "none";
  void coin.offsetWidth;

  const animationName = isHeads ? "spin-head" : "spin-tail";
  coin.style.animation = `${animationName} 3s forwards`;

  if (isHeads) {
    heads++;
  } else {
    tails++;
  }

  disableButton();
  setTimeout(updateStats, 3000);
});

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});

function updateStats() {
  headsCount.textContent = `Heads : ${heads}`;
  tailsCount.textContent = `Tails : ${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 3000);
}
