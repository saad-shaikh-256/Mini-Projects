const searchInput = document.querySelector(".search-Input");
const searchButton = document.querySelector(".search-Button");
const dataWrapper = document.querySelector(".show-Result");
const loader = document.querySelector("#loader");
const errorMessage = document.querySelector("#error-message");

// Data Elements
const ctFlag = document.querySelector("#country-Flag");
const ctName = document.querySelector("#country-Name");
const ctOtherName = document.querySelector("#other-Name");
const ctRegion = document.querySelector("#country-Region");
const ctCapital = document.querySelector("#country-Capital");
const ctCurrency = document.querySelector("#country-Currency");
const ctLanguage = document.querySelector("#country-Language");
const ctPopulation = document.querySelector("#country-Population");

// Updating Country Request
const getCountryDetails = async (API_URL) => {
  loader.classList.remove("hidden");
  dataWrapper.style.display = "none";
  errorMessage.classList.add("hidden");
  try {
    // Fetching Country Data from the API and parse the response as JSON
    const response = await fetch(API_URL);

    // Checking if the response was successful, otherwise throw an error
    if (!response.ok) {
      throw new Error("Country not found");
    }
    const country = await response.json();

    // Extracting Country Info details
    const coutFlag = await country[0].flags.svg;
    const coutName = await country[0].name.common;
    const coutOtherName = await country[0].name.official;
    const coutRegion = await country[0].region;
    const coutCapital = await country[0].capital[0];
    const coutCurrency = await Object.values(country[0].currencies)
      .map((c) => `${c.name} (${c.symbol})`)
      .join(", ");
    const coutLanguage = await Object.values(country[0].languages).join(", ");
    const coutPopulation = await country[0].population.toLocaleString();

    // Update the HTML elements with the new data
    ctFlag.src = coutFlag;
    ctName.textContent = coutName;
    ctOtherName.textContent = coutOtherName;
    ctRegion.textContent = coutRegion;
    ctCapital.textContent = coutCapital;
    ctCurrency.textContent = coutCurrency;
    ctLanguage.textContent = coutLanguage;
    ctPopulation.textContent = coutPopulation;

    // Make the data container visible
    dataWrapper.style.display = "flex";
  } catch (error) {
    errorMessage.classList.remove("hidden");
    console.error("Fetch Error:", error);
  } finally {
    loader.classList.add("hidden");
  }
};

// Set up the request for a specific country
const setupInfoRequest = (countryName) => {
  const API_URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  getCountryDetails(API_URL);
};
// Handel User Input in the search box
function handleSearch() {
  const countryName = searchInput.value.trim();
  if (countryName) {
    setupInfoRequest(countryName);
  }
}

// Listen for Enter key
searchInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    handleSearch();
  }
});

// Listen for click on the search button
searchButton.addEventListener("click", handleSearch);