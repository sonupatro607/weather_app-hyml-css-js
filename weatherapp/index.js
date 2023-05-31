const input_field = document.querySelector(".city_search");
const search_btn = document.querySelector(".icons");
const climate_change = document.querySelector(".climate_degree");
const location_naam = document.getElementById("head1");
const climate_name = document.getElementById("climate_main");
const humidity = document.getElementById("humdty_guage");
const pressure = document.getElementById("pres_guage");
const wind = document.getElementById("wind_guage");
const climate_image = document.getElementById("climate_img");
const main_container = document.getElementById("main_ctnnn");
const detailed_cliamte = document.getElementById("detailed_cliamte_ctn");

const pagenfound_container = document.getElementById("pagefound_ctn");
const pagefound_message = document.getElementById("pagefound_msg");

search_btn.addEventListener("click", () => {
  weatherHandler(input_field.value);
});

async function weatherHandler(city) {
  const api_key = "d78b1dddacc061df33da4d41eb90d4dc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const response = await fetch(`${url}`);
  var weather_data = await response.json();
  console.log(weather_data);
  location_naam.innerHTML = `${weather_data.name}`;
  climate_change.innerHTML = `${(weather_data.main.temp / 10).toFixed(1)}°C`;
  climate_name.innerHTML = `${weather_data.weather[0].main}`;
  humidity.innerHTML = `${weather_data.main.humidity} g.m-3`;
  pressure.innerHTML = `${weather_data.main.pressure} g.m-3`;
  wind.innerHTML = `${weather_data.wind.speed} km/h`;

  if (weather_data.cod === "404") {
    pagefound_container.style.display = "flex";
    pagefound_message.innerHTML = `${weather_data.message}`;
    detailed_cliamte.style.display = "none";
  }

  switch (weather_data.weather[0].main) {
    case "cloud":
      climate_image.src = "cloud.png";
      break;
    case "clear":
      climate_image.src = "clear.jpg";
      break;
    case "rain":
      climate_image.src = "rain.png";
      break;
    case "mist":
      climate_image.src = "mist.jpg";
      break;
    case "snow":
      climate_image.src = "snow.png";
      break;
    case "Haze":
      climate_image.src = "haze.jpg";
      break;
    default:
      climate_image.src = "cloud.png";
  }
  detailed_cliamte.style.display = "flex";
  pagefound_container.style.display = "none";
}
