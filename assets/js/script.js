var cityInputEl = document.querySelector("#cityname");
var searchFormEl = document.querySelector("#searchForm");

var getWeather = function(cityName) {
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=306f2336ac5d07bfca252cea5ce8575a";

    


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

searchFormEl.addEventListener("submit", getCityName);