var cityInputEl = document.querySelector("#cityname");
var searchFormEl = document.querySelector("#searchForm");

var weatherContainerEl = document.querySelector("#weathercontainer");
var forcastContainerEl = document.querySelector("#forcastcontainer");

var getWeather = function(cityName) {
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=306f2336ac5d07bfca252cea5ce8575a";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayWeather(data, cityName);
        });
    });

    apiUrl = "api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "&cnt=5&appid=306f2336ac5d07bfca252cea5ce8575a";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayForcast(data, cityName);
        });
    });

};

var getCityName = function(event) {
    var cityName = cityInputEl.value.trim();

    if (cityName) { //validate city name
        getWeather(cityName)
        cityInputEl.value = "";
    } 
    else {
        alert("Please enter a valid city name");
    }

    console.log(cityName);
};

var displayWeather = function(data, city) {
    console.log(data);
    console.log(city);
    
    weatherContainerEl.textContent = "";
};

var displayForcast = function(data, city) {
    console.log(data);
    console.log(city); 
    
    forcastContainerEl.textContent = "";
};

searchFormEl.addEventListener("submit", getCityName);