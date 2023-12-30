/*document.addEventListener("DOMContentLoaded", () => {
 
    /*const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=-20.500&lon=-86.951&appid=6f890d0a59271c9f5a3cf6919b33d215&units=imperial";
  
    apiFetch(url).then(data => displayResults(currentTemp, weatherIcon, captionDesc, data));
});
  
//20.500196209724677, -86.95117899722243
  
  async function apiFetch(url) {
   
    let data;
  
    try {
      
        const response = await fetch(url);
       
        if (response.ok) {
      
        data = await response.json();
        
        } else {
            throw Error(await response.text());
        }
    
    } catch (error) {
        console.log(error);
        return null;
    }
    return data;
  }
  
  
  function displayResults(currentTemp, weatherIcon, captionDesc, weatherData) {
   
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
   
  
    const desc = weatherData.weather[0].description.capitalize();
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
  
  
  String.prototype.capitalize = function() {
   
    let arr = this.split(" ");
   
    let capArr = [];
    
    arr.forEach(word => {
    
        capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    });
    return capArr.join(" ");
  }*/
  /***********************-------------------------- */
   // Get the HTML elements
/*const weatherSummary = document.getElementById("weatherSummary");
const Cozumel = document.getElementById("Cozumel");
const temperatureCozumel = document.getElementById("temperatureCozumel");
const windChill = document.getElementById("windChill");
const humidityCozumel = document.getElementById("humidityCozumel");
const windSpeedCozumel = document.getElementById("windSpeedCozumel");
const weatherIcon = document.getElementById("weatherIcon");

// Define the API key and the URL
const apiKey = "6f890d0a59271c9f5a3cf6919b33d215&units=imperial"; // Replace with your own API key
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
  });*/
  document.addEventListener("DOMContentLoaded", () => {
 
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=-20.500&lon=-86.951&appid=6f890d0a59271c9f5a3cf6919b33d215&units=imperial";
  
    apiFetch(url).then(data => displayResults(currentTemp, weatherIcon, captionDesc, data));
});
  
//20.500196209724677, -86.95117899722243
  
  async function apiFetch(url) {
   
    let data;
  
    try {
      
        const response = await fetch(url);
       
        if (response.ok) {
      
        data = await response.json();
        
        } else {
            throw Error(await response.text());
        }
    
    } catch (error) {
        console.log(error);
        return null;
    }
    return data;
  }
  
  
  function displayResults(currentTemp, weatherIcon, captionDesc, weatherData) {
   
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
   
  
    const desc = weatherData.weather[0].description.capitalize();
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
  
  
  String.prototype.capitalize = function() {
   
    let arr = this.split(" ");
   
    let capArr = [];
    
    arr.forEach(word => {
    
        capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    });
    return capArr.join(" ");
  }