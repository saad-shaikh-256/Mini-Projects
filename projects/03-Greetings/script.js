const greetings = document.getElementById("greeting");

const time = document.getElementById("time");

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function displayTime() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const currentSecond = new Date().getSeconds();

  let greetingText = "";

  if (currentHour < 12) {
    greetingText = `Good Morning`;
  } else if (currentHour < 17) {
    greetingText = `Good Afternoon`;
  } else if (currentHour < 21) {
    greetingText = `Good Evening`;
  } else {
    greetingText = `Good Night`;
  }

  greetings.textContent = greetingText;

  const formattedHour = formatTime(currentHour);
  const formattedMinute = formatTime(currentMinute);
  const formattedSecond = formatTime(currentSecond);

  time.textContent = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}
displayTime();
setInterval(displayTime, 1000);
