const inputArea = document.getElementById("text-Input");
const wordCount = document.getElementById("word-Count");
const charachterCount = document.getElementById("character-Count");

inputArea.focus();

inputArea.addEventListener("input", () => {
  charachterCount.textContent = inputArea.value.length;

  let text = inputArea.value.trim();
  wordCount.textContent = text.split(/\s+/).filter((item) => item).length;
});
