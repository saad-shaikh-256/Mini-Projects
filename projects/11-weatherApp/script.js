const searchInput = document.querySelector(".search-Input");
const locationButton = document.querySelector(".location-Button");
const currentWeatherDiv = document.querySelector(".current-Weather");
const hourlyWeatherDiv = document.querySelector(
  ".hourly-Weather .weather-List"
);
const loaderOverlay = document.querySelector(".loading-Overlay");
const showLoader = () => {
  loaderOverlay.classList.remove("opacity-0", "pointer-events-none");
  loaderOverlay.classList.add("opacity-100", "pointer-events-auto");
};

const hideLoader = () => {
  loaderOverlay.classList.add("opacity-0", "pointer-events-none");
  loaderOverlay.classList.remove("opacity-100", "pointer-events-auto");
};
const API_KEY = atob("OWI2NzdiMjA2NmFhNDExMTkxMjEzMTYyMDI1MjcwNw==");

// Weather code for mapping to custom icons
const weatherCodes = {
  clear: [1000],
  clouds: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  rain: [
    1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246,
    1273, 1276,
  ],
  moderate_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246],
  snow: [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
    1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282,
  ],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
};

const displayHourlyForecast = (combinedHourlyData) => {
  const currentHour = new Date().setMinutes(0, 0, 0);
  const next24Hours = currentHour + 24 * 60 * 60 * 1000;

  // Filter the hourly data to only include the next 24 hours
  const next24HoursData = combinedHourlyData.filter(({ time }) => {
    const forcastTime = new Date(time).getTime();
    return forcastTime >= currentHour && forcastTime <= next24Hours;
  });

  // Genetating HTML for each hourly forcast and display it
  hourlyWeatherDiv.innerHTML = next24HoursData
    .map((item) => {
      const temprature = Math.floor(item.temp_c);
      const time = item.time.split(" ")[1].substring(0, 5);
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(item.condition.code)
      );

      return `<li class="weather-Item">
              <p class="time">${time}</p>
              <img src="Assets/Weather-Icon/${weatherIcon}.svg" class="weather-Icon" />
              <p class="temperature">${temprature}<span>°C</span></p>
            </li>`;
    })
    .join("");
};

const getWeatherDetails = async (API_URL) => {
  window.innerWidth <= 768 && searchInput.blur();
  document.body.classList.remove("show-no-result");
  showLoader();

  try {
    // Fetching Weather data from the API and parse the response as JSON
    const response = await fetch(API_URL);
    const data = await response.json();

    // Extracting current weather details
    const temprature = await Math.floor(data.current.temp_c);
    const description = await data.current.condition.text;
    const weatherIcon = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(data.current.condition.code)
    );

    // Update the current weather details
    currentWeatherDiv.querySelector(
      ".weather-Icon"
    ).src = `Assets/Weather-Icon/${weatherIcon}.svg`;
    currentWeatherDiv.querySelector(
      ".temperature"
    ).innerHTML = `${temprature}<span class="font-medium text-base h-full">°C</span>`;
    currentWeatherDiv.querySelector(
      ".description"
    ).textContent = `${description}`;

    //  Combine hourly data from today and tomorrow
    const combinedHourlyData = [
      ...data.forecast.forecastday[0].hour,
      ...data.forecast.forecastday[1].hour,
    ];

    displayHourlyForecast(combinedHourlyData);

    searchInput.value = data.location.name;
  } catch (error) {
    document.body.classList.add("show-no-result");
  } finally {
    hideLoader();
  }
};

// Set up the weather request for a specific city
const setupWeatherRequest = (cityName) => {
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=2`;

  getWeatherDetails(API_URL);
};

// Handel User Input in the search box
searchInput.addEventListener("keyup", (e) => {
  const cityName = searchInput.value.trim();

  if (e.key == "Enter" && cityName) {
    setupWeatherRequest(cityName);
  }
});

// Get User's Coordinates
locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;

      getWeatherDetails(API_URL);
    },
    (error) => {
      alert(
        "Location access denied. Please enable permissions to use this feature."
      );
    }
  );
});

// Initial weather request for london as the default city
setupWeatherRequest("Ahmedabad");
