let websiteInput = document.querySelector("#website-Input");
let searchPassword = document.querySelector("#search-Password");
let errorMessage = document.querySelector("#error-Container");
let detailContainer = document.querySelector("#details-Container");

let retrievedWebsite = document.querySelector("#retrieved-Website");
let retrievedEmail = document.querySelector("#retrieved-Email");
let retrievedPassword = document.querySelector("#retrieved-Password");

// Decode Base64 password
function decodePassword(encoded) {
  return atob(encoded);
}

errorMessage.classList.add("hidden");
detailContainer.classList.add("hidden");
errorMessage.classList.remove("bg-red-50", "text-red-500", "border-red-100");

// Handle search submit
searchPassword.addEventListener("submit", (e) => {
  e.preventDefault();

  const websiteValue = websiteInput.value.trim().toLowerCase();

  if (!websiteValue) {
    errorMessage.textContent = "Please enter a website to search.";
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("bg-red-50", "text-red-500", "border-red-100");

    setTimeout(() => {
      errorMessage.classList.add("hidden");
      errorMessage.classList.remove(
        "bg-red-50",
        "text-red-500",
        "border-red-100"
      );
    }, 4000);
    return;
  }

  // Retrieve stored passwords
  let storedData = JSON.parse(localStorage.getItem("passwordManager")) || [];

  // Find the first match for the website
  const foundEntry = storedData.find((entry) => entry.website === websiteValue);

  if (foundEntry) {
    retrievedWebsite.textContent = foundEntry.website;
    retrievedEmail.textContent = foundEntry.email;
    retrievedPassword.textContent = decodePassword(foundEntry.password);
    detailContainer.classList.remove("hidden");
  } else {
    errorMessage.textContent = "No password found for this website.";
    errorMessage.classList.remove("hidden");
    errorMessage.classList.remove(
      "bg-green-50",
      "text-green-500",
      "border-green-200"
    );
    errorMessage.classList.add("bg-red-50", "text-red-500", "border-red-100");

    retrievedWebsite.textContent = "";
    retrievedEmail.textContent = "";
    retrievedPassword.textContent = "";

    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 5000);
  }
});
