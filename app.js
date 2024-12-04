const apiKey = "0121a80939fba8842276a618810ad2fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const inputCity = document.querySelector("input");
const searchButton = document.querySelector("button");
const weathericone = document.querySelector(".weather-icone");


async function checkWeather(city) {
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    console.log(data);

    if (data.weather[0].main == "Clouds") {
        weathericone.src = "images/clouds.png";
    }
    if (data.weather[0].main == "clear") {
        weathericone.src = "images/clear.png";
    }
    if (data.weather[0].main == "drizzle") {
        weathericone.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "mist") {
        mist
        weathericone.src = "images/mist.png";
    }
    if (data.weather[0].main == "rain") {
        weathericone.src = "images/rain.png";
    }
    if (data.weather[0].main == "wind") {
        weathericone.src = "images/wind.png";
    }
    if (data.weather[0].main == "Haze") {
        weathericone.src = "images/haze.png";
    }
}



searchButton.addEventListener("click", () => {
    checkWeather(inputCity.value);
});

inputCity.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkWeather(inputCity.value);
    }
});