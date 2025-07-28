const tasks = [
  {
    id: "01",
    title: "Counter",
    url: "projects/01-Counter/index.html",
  },
  {
    id: "02",
    title: "Random Color",
    url: "projects/02-randomColor/index.html",
  },
  {
    id: "03",
    title: "Greetings",
    url: "projects/03-Greetings/index.html",
  },
  {
    id: "04",
    title: "Word Counter",
    url: "projects/04-wordCounter/index.html",
  },
  {
    id: "05",
    title: "Coin Flipper",
    url: "projects/05-coinFlipper/index.html",
  },
  {
    id: "06",
    title: "Fontsize Converter",
    url: "projects/06-fontsizeConverter/index.html",
  },
  {
    id: "07",
    title: "Calculator",
    url: "projects/07-Calculator/index.html",
  },
  {
    id: "08",
    title: "Story Teller",
    url: "projects/08-storyTeller/index.html",
  },
  {
    id: "09",
    title: "Random Joke",
    url: "projects/09-randomJoke/index.html",
  },
  {
    id: "10",
    title: "Guess the Number",
    url: "projects/10-numberGuesser/index.html",
  },
  {
    id: "11",
    title: "Weather App",
    url: "projects/11-weatherApp/index.html",
  },
  {
    id: "12",
    title: "Country Info",
    url: "projects/12-countryInfo/index.html",
  },
  {
    id: "...",
    title: "Comming Soon",
    url: "#",
  },
];

const container = document.getElementById("taskContainer");

tasks.forEach((task) => {
  const card = document.createElement("a");
  card.href = task.url || "#";
  card.className =
    "h-fit bg-gray-800 hover:bg-gray-700 active:bg-gray-700 hover:scale-[98%] active:scale-[98%] border border-white p-6 rounded-md flex flex-col gap-3";

  card.innerHTML = `
          <div class="text-white text-center font-medium text-2xl md:text-4xl">
            ${task.id}
          </div>
          <div class="text-white text-center font-medium text-lg md:text-xl">
            ${task.title}
          </div>
        `;

  container.appendChild(card);
});
