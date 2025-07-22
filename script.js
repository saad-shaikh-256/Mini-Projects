const projects = [
  {
    number: "01",
    title: "Coming Soon",
    url: "#",
  },
  {
    number: "02",
    title: "Coming Soon",
    url: "#",
  },
  {
    number: "03",
    title: "Coming Soon",
    url: "#",
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

