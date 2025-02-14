const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-26.2041&lon=28.0473&APPID=15b7c720f81f42feaffd4c4fbb44c08b&units=imperial";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let newList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    
    for (let day = 0; day <= 4; day++) {
        let d = new Date(newList[day].dt_txt);
        document.getElementById(`dayWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = newList[day].main.temp;

        const imgalt = newList[day].weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + newList[day].weather[0].icon + '@2x.png';
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
    }
  });
