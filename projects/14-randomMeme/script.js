const generateBtn = document.querySelector(".generate-Btn");
const emojiContainer = document.querySelector(".emoji-Container");
const imageContainer = document.querySelector(".generated-Image");
const imageSrc = document.querySelector(".meme-Image");
const loader = document.querySelector(".loader");

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
// API URL
const API_URL = "https://meme-api.com/gimme";

let generateMeme = () => {
  // Set UI to a loading state
  generateBtn.disabled = true;
  generateBtn.textContent = "Loading...";

  // Show the container, display the loader, and hide the old image
  imageContainer.classList.remove("hidden");
  loader.classList.remove("hidden");
  imageSrc.classList.add("hidden");

  // Fetch data from the API
  fetch(API_URL)
    .then((data) => data.json())
    .then((item) => {
      // Update the image source. The 'load' event listener will handle showing it.
      imageSrc.src = item.url;
      imageSrc.alt = item.title;

      // Update the emoji randomly
      const randomLaugh =
        laughingStyles[Math.floor(Math.random() * laughingStyles.length)];
      emojiContainer.textContent = randomLaugh;
    })
    .catch((error) => {
      console.error("Error fetching meme:", error);
      alert("Failed to load meme. Please try again.");
      // Reset the button on error
      generateBtn.disabled = false;
      generateBtn.textContent = "Generate Meme";
      loader.classList.add("hidden");
    });
};

// This event fires when the new image (from setting imageSrc.src) has finished loading
imageSrc.addEventListener("load", () => {
  // Hide the loader and show the fully loaded image
  loader.classList.add("hidden");
  imageSrc.classList.remove("hidden");

  // Re-enable the button and change its text to "Refresh"
  generateBtn.disabled = false;
  generateBtn.textContent = "Refresh";
});

generateBtn.addEventListener("click", generateMeme);
