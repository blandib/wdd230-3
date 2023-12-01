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