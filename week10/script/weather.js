
// select HTML elements in the document
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  
const url = 'https://api.openweathermap.org/data/2.5/Trier,Germany&appid=fa6e9e90720a8c3b98462891aa284eb7';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      // displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
  /*function displayResults(data) {
    currentTemp.innerHTML = `${data.url}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('02d.png ', 'few clouds');
    weatherIcon.setAttribute('02n.png ', 'few clouds');
    captionDesc.textContent = `${desc}`;
  }*/
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.url}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('02d.png ', 'few clouds');
    weatherIcon.setAttribute('02n.png ', 'few clouds');
    captionDesc.textContent = `${desc}`;
  }
apiFetch();
