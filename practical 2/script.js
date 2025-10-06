const weatherData = {
    'bhavnagar': '36°C',
    'ahmedabad': '39°C',
    'mumbai': '32°C',
    'delhi': '35°C',

    'bangalore': '28°C',
    'kolkata': '33°C'
};

const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.toLowerCase().trim();
    
    if (weatherData.hasOwnProperty(city)) {
        weatherResult.textContent = `The weather in ${city.charAt(0).toUpperCase() + city.slice(1)} is ${weatherData[city]}`;
    } else {
        weatherResult.textContent = 'City not found. Please try another city.';
    }
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeatherBtn.click();
    }
}); 