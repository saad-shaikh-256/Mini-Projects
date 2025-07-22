const projects = [
  {
    number: "01",
    title: "Counter",
    url: "projects/01-Counter/index.html",
  },
  {
    number: "02",
    title: "Random Color",
    url: "projects/02-randomColor/index.html",
  },
  {
    number: "03",
    title: "Greetings",
    url: "projects/03-Greetings/index.html",
  },
  {
    number: "04",
    title: "Coming Soon",
    url: "#",
  },
  {
    number: "05",
    title: "Coming Soon",
    url: "#",
  },
  {
    number: "06",
    title: "Coming Soon",
    url: "#",
  },
  {
    number: "07",
    title: "Coming Soon",
    url: "#",
  },
];

// Get the container element
const projectContainer = document.getElementById("project-Container");

// Generate and inject HTML
projectContainer.innerHTML = projects
  .map(
    (project) => `
      <a href="${project.url}" class="project-Box">
        <div class="project-Number">${project.number}</div>
        <div class="project-Title">${project.title}</div>
      </a>
    `
  )
  .join("");
