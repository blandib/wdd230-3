// Get the current weather data from OpenWeatherMap API
        // You need to get your own API key from https://openweathermap.org/api
        var api_key = "6f890d0a59271c9f5a3cf6919b33d215&units=imperial";
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
        });