
    // Function to fetch data from the REST Countries API
    function fetchCountries() {
      fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(countries => displayCountries(countries))
        .catch(error => console.log(error));
    }

    // Function to display the countries using Bootstrap cards
function displayCountries(countries) {
  const countriesList = document.getElementById('countries-list');
  countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'card col-md-4';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name;

    const flagImg = document.createElement('img');
    flagImg.className = 'card-img-top';
    flagImg.src = country.flags.png;
    flagImg.alt = `${country.name} flag`;

    const cardCap = document.createElement('p');
    cardCap.className = 'card-cap';
    cardCap.textContent = `Capital: ${country.capital}`;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `Region: ${country.region}`;

    const cardCode = document.createElement('p');
    cardCode.className='card-code';
    cardCode.textContent=`Country Code: ${country.alpha2Code}`

    const weatherButton = document.createElement('button');
    weatherButton.className = 'btn btn-primary';
    weatherButton.textContent = 'Get Weather';
    weatherButton.addEventListener('click', () => fetchWeather(country.capital));

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(flagImg);
    cardBody.appendChild(cardCap);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardCode);
    cardBody.appendChild(weatherButton);

    card.appendChild(cardBody);

    countriesList.appendChild(card);
  });
}


    // Function to fetch weather data from the OpenWeatherMap API
    function fetchWeather(city) {
      const apiKey = 'fbbc6a23e96cb7666e26753f47774680';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(weather => displayWeather(city, weather))
        .catch(error => console.log(error));
    }

    // Function to display the weather data for a specific country
    function displayWeather(city, weather) {
      alert(`Weather in ${city}:\n\nTemperature: ${weather.main.temp}°C\nHumidity: ${weather.main.humidity}%`);
    }

    // Fetch countries data when the page loads
    fetchCountries();
  