// Get the current weather data from OpenWeatherMap API
        // You need to get your own API key from https://openweathermap.org/api
        /*var api_key = "6f890d0a59271c9f5a3cf6919b33d215&units=imperial";
        var city = "Cozumel";
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6f890d0a59271c9f5a3cf6919b33d215&units=imperial" + api_key + "&units=metric";

        // Make an AJAX request to the API and display the data
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(data) {
                // Display the current temperature, condition, and humidity
                $("#temp").text("Temperature: " + data.main.temp + " °C");
                $("#cond").text("Condition: " + data.weather[0].description);
                $("#humid").text("Humidity: " + data.main.humidity + " %");

                // Check if there are any weather alerts from the government
                // If yes, display them as a closeable message at the top of the page
                if (data.alerts) {
                    var alert_text = "";
                    for (var i = 0; i < data.alerts.length; i++) {
                        alert_text += data.alerts[i].event + ": " + data.alerts[i].description + "\n";
                    }
                    $("#alert-text").text(alert_text);
                } else {
                    // If no alerts, hide the alert div
                    $("#alert").hide();
                }
            },
            error: function(error) {
                // If there is an error, display a message
                $("#temp").text("Sorry, something went wrong.");
                $("#cond").text("");
                $("#humid").text("");
                $("#alert").hide();
            }
        });*/
        const weatherSummary = document.getElementById("weatherSummary");
const Cozumel = document.getElementById("Cozumel");
const temperatureCozumel = document.getElementById("temperatureCozumel");
const windChill = document.getElementById("windChill");
const humidityCozumel = document.getElementById("humidityCozumel");
const windSpeedCozumel = document.getElementById("windSpeedCozumel");
const weatherIcon = document.getElementById("weatherIcon");

// Define the API key and the URL
const apiKey = "15b7c720f81f42feaffd4c4fbb44c08b&units=imperial"; // Replace with your own API key
const url = "https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&appid=" + apiKey;

// Fetch the weather data from the API
fetch(url)
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    // Extract the data you need
    const weather = data.weather[0].main; // The main weather condition
    const description = data.weather[0].description; // The weather description
    const icon = data.weather[0].icon; // The weather icon code
    const temp = data.main.temp; // The current temperature in Fahrenheit
    const feels_like = data.main.feels_like; // The apparent temperature in Fahrenheit
    const humidity = data.main.humidity; // The humidity percentage
    const wind = data.wind.speed; // The wind speed in miles per hour

    // Display the data in the HTML elements
    Cozumel.innerHTML = "Cozumel, Mexico"; // The location name
    temperatureCozumel.innerHTML = temp; // The temperature
    windChill.innerHTML = feels_like; // The wind chill
    humidityCozumel.innerHTML = humidity; // The humidity
    windSpeedCozumel.innerHTML = wind; // The wind speed
    weatherIcon.src = "https://openweathermap.org/img/wn/" + icon + ".png"; // The weather icon
    weatherSummary.querySelector(".weather").innerHTML = weather; // The weather condition
    weatherSummary.querySelector(".desc").innerHTML = description; // The weather description

    // Check if there are any weather alerts
    if (data.alerts) {
      // Loop through the alerts array and display them
      data.alerts.forEach(alert => {
        // Create a new div element for each alert
        const alertDiv = document.createElement("div");
        // Set the class name of the div element
        alertDiv.className = "alert";
        // Set the content of the div element
        alertDiv.innerHTML = `
          <h4>${alert.event}</h4>
          <p>${alert.description}</p>
          <p>Starts at: ${new Date(alert.start * 1000).toLocaleString()}</p>
          <p>Ends at: ${new Date(alert.end * 1000).toLocaleString()}</p>
        `;
        // Append the div element to the weather summary element
        weatherSummary.appendChild(alertDiv);
      });
    }
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });