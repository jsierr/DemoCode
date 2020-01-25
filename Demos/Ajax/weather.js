// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

// National Weather Service forecast data for Milwaukee, WI
const weatherURL = "https://api.weather.gov/gridpoints/MKX/85,65/forecast";

const weatherSuccess = (results) => {
    $("#spinner").hide();
    results.properties.periods.forEach((entry) => {
        $("#weatherdata").append(`<tr class="weatherdata hidden"><td>${entry.name}</td><td>${entry.temperature}${entry.temperatureUnit}</td></tr>`);
        $("#weatherdata tr:last").fadeIn();
    });
};

const weatherError = () => {
    $("#spinner").hide();
    alert("Umm, something went wrong");
};

const loadWeatherData = () => {
    $("#spinner").show();
    $(".weatherdata").remove();
    $.ajax({
        type: "GET",        // Issue a GET request
        url: weatherURL,    // Retrieve the weather data
        data: null,         // There is no data to send to the server
        crossDomain: true,  // Access data from another domain
        async: true,        // Make the request in the background
        dataType: "json",   // Format results in JSON
        success: weatherSuccess,
        // success: (results) => {
        //     setTimeout(() => { weatherSuccess(results); }, 1000);
        // },
        error: weatherError,
    });
};

$(document).ready(() => {
    $("#loaddata").click(loadWeatherData);
});