const jokeContainer = document.querySelector(".joke-Container");
const emojiContainer = document.querySelector(".emoji-Container");
const generateBtn = document.querySelector(".generate-Btn");

// Joke API
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const laughingStyles = [
  "😂",
  "🤣",
  "😆",
  "😹",
  "😁",
  "😜",
  "😝",
  "😛",
  "🤪",
  "😇",
  "😎",
  "🙃",
  "🤭",
  "😅",
  "🤩",
  "🥳",
  "🫠",
];

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;

      const randomLaugh =
        laughingStyles[Math.floor(Math.random() * laughingStyles.length)];
      emojiContainer.textContent = randomLaugh;
    });
};

generateBtn.addEventListener("click", getJoke);
