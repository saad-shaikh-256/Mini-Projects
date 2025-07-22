const greetingEmoji = document.getElementById("timebased-Emoji");
const greetingMessage = document.getElementById("greeting");

let name = prompt("What's your name?:");
if (!name || name.trim() === "") {
  name = "Guest";
}

const currentHour = new Date().getHours();
if (currentHour >= 0 && currentHour < 5) {
  greetingEmoji.textContent = "🌌";
  greetingMessage.textContent = `You're up late, ${name}!`;
} else if (currentHour >= 5 && currentHour < 8) {
  greetingEmoji.textContent = "🌅";
  greetingMessage.textContent = `Good early morning, ${name}!`;
} else if (currentHour >= 8 && currentHour < 12) {
  greetingEmoji.textContent = "☀️";
  greetingMessage.textContent = `Good morning, ${name}!`;
} else if (currentHour >= 12 && currentHour < 15) {
  greetingEmoji.textContent = "🌞";
  greetingMessage.textContent = `Good afternoon, ${name}!`;
} else if (currentHour >= 15 && currentHour < 18) {
  greetingEmoji.textContent = "🌤️";
  greetingMessage.textContent = `Good late afternoon, ${name}!`;
} else if (currentHour >= 18 && currentHour < 21) {
  greetingEmoji.textContent = "🌇";
  greetingMessage.textContent = `Good evening, ${name}!`;
} else if (currentHour >= 21 && currentHour <= 23) {
  greetingEmoji.textContent = "🌙";
  greetingMessage.textContent = `Good night, ${name}!`;
}
