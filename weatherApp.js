const container = document.querySelector('.container');
const search = document.querySelector('.search-button');
const weatherInfo = document.querySelector('.content-weather-info');

search.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click');
    const APIkey = '465e30e7252001f81fd263141c141bf3';
    const cityName = document.querySelector('.search-bar').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weatherInfo = document.querySelector('.content-weather-info');
            weatherInfo.innerHTML = `
                <p class="weather-city-name">${data.name}</p>
                <p class="weather-temperature">Temperature: ${data.main.temp}°C</p>
                <p class="weather-description">Coverage: ${data.weather[0].description}</p>
                <p class="weather-humidity">Humidity: ${data.main.humidity}%</p>
                <p class="weather-wind">Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.log(error);
        })
});

