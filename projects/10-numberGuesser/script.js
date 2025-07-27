const input = document.querySelector("#guessed-Number");
const result = document.querySelector(".guessed-Result");
const button = document.querySelector(".submit-Input");
const remainChances = document.querySelector("#chances-Left");
const mainHeading = document.querySelector(".main-Heading");
const subHeading = document.querySelector(".sub-Heading");
const chancesCounter = document.querySelector(".chances-Counter");
const tipContainer = document.querySelector(".tip-Contianer");
const emojiContainer = document.querySelector(".emoji-Container");

input.focus();

let randomNumber = Math.floor(Math.random() * 100) + 1;

let chances = 10;

const highHints = ["Too high!", "Try something lower!", "Aim down a bit."];
const lowHints = ["Too low!", "Go a little higher!", "Not quite there!"];

const emojiStyle = [
  "💡",
  "💭",
  "🤔",
  "🧠",
  "🔍",
  "🎯",
  "🎲",
  "🎮",
  "🕹️",
  "🧩",
  "🔢",
  "🔮",
  "⏳",
  "🫣",
];

button.addEventListener("click", () => {
  const inputValue = parseInt(input.value.trim(), 10);

  // Random Emoji
  const randomEmoji = emojiStyle[Math.floor(Math.random() * emojiStyle.length)];
  emojiContainer.textContent = randomEmoji;

  // Clear previous styles
  result.classList.remove(
    "bg-red-50",
    "text-red-500",
    "bg-green-50",
    "text-green-500",
    "hidden"
  );

  // Check for empty or invalid input
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
    result.textContent = "Please enter a valid number (1–100)!";
    result.classList.add("bg-red-50", "text-red-500");
    input.focus();
    return;
  }

  // Decrease chances
  chances--;
  remainChances.textContent = `${chances}`;

  // Check win condition
  if (inputValue === randomNumber) {
    const attemptsUsed = 10 - chances;
    result.textContent = "🎉 Congratulations!";
    result.classList.add("text-green-500", "bg-green-50");
    mainHeading.textContent = "You got it right!";
    subHeading.textContent = `You guessed it in ${attemptsUsed} attempt${
      attemptsUsed === 1 ? "" : "s"
    }.`;
    input.disabled = true;
    button.disabled = true;
    chancesCounter.classList.add("hidden");
    tipContainer.textContent = "New game will load in a few seconds...";
    setTimeout(() => location.reload(), 4000);
    return;
  }

  // Show hot/cold tip
  const diff = Math.abs(inputValue - randomNumber);
  let heatTip = "❄️ Cold guess!";
  if (diff <= 5) heatTip = "🔥 Very close!";
  else if (diff <= 15) heatTip = "🌡️ Getting warmer!";
  tipContainer.textContent = heatTip;

  // Provide high/low feedback
  if (inputValue > randomNumber) {
    const randomMsg = highHints[Math.floor(Math.random() * highHints.length)];
    result.textContent = `${randomMsg}`;
  } else {
    const randomMsg = lowHints[Math.floor(Math.random() * lowHints.length)];
    result.textContent = `${randomMsg}`;
  }

  result.classList.add("text-red-500", "bg-red-50");
  // Check if chance is zero
  if (chances <= 0) {
    input.disabled = true;
    result.textContent = "You lost the game!";
    result.classList.add("text-red-500");
    remainChances.textContent = `${chances}`;
    result.classList.add("bg-red-50");
    button.textContent = "Replay";
    button.addEventListener("click", () => location.reload());
  }
});
