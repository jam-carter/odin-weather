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

        // Clear exisiting weather data
        weatherInfo.innerHTML  
        // Create the city name container
        const cityNameContainer = document.createElement('div');
        cityNameContainer.classList.add('weather-city-name');
        cityNameContainer.innerText = `${data.name}, ${data.sys.country}`;
        
        // Create the top container
        const topContainer = document.createElement('div');
        topContainer.classList.add('content-top');
        topContainer.style.display = 'flex';

        // Create the left container for top
        const leftContainerTop = document.createElement('div');
        leftContainerTop.classList.add('left-container');

        // Create the right container for top
        const rightContainerTop = document.createElement('div');
        rightContainerTop.classList.add('right-container');

        // Create the bottom container
        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('content-bottom');
        bottomContainer.style.display = 'flex';

        // Create the left container for bottom
        const leftContainerBottom = document.createElement('div');
        leftContainerBottom.classList.add('left-container');

        // Create the right container for bottom
        const rightContainerBottom = document.createElement('div');
        rightContainerBottom.classList.add('right-container');

        // Insert the containers into the weatherInfo container
        weatherInfo.appendChild(cityNameContainer);
        weatherInfo.appendChild(topContainer);
        weatherInfo.appendChild(bottomContainer);
        topContainer.appendChild(leftContainerTop);
        topContainer.appendChild(rightContainerTop);
        bottomContainer.appendChild(leftContainerBottom);
        bottomContainer.appendChild(rightContainerBottom);

        // Add the content to the containers
        leftContainerTop.innerHTML = `
            <p class="weather-temperature">Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
        `;
        rightContainerTop.innerHTML = `
            <p class="weather-max-temp">Max Temp: ${(data.main.temp_max - 273.15).toFixed(2)}°C</p>
            <p class="weather-min-temp">Min Temp: ${(data.main.temp_min - 273.15).toFixed(2)}°C</p>
            <p class="weather-feels-like">Feels Like: ${(data.main.feels_like - 273.15).toFixed(2)}°C</p>
        `;
        leftContainerBottom.innerHTML = `
            <p class="weather-description">Coverage: ${data.weather[0].description}</p>
        `;
        rightContainerBottom.innerHTML = `
            <p class="weather-humidity">Humidity: ${data.main.humidity}%</p>
            <p class="weather-wind">Wind Speed: ${data.wind.speed} m/s</p>
            <p class="weather-pressure">Pressure: ${data.main.pressure} hPa</p>
        `;
    })
    .catch(error => {
        console.log(error);
    });
});