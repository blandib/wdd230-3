
/*let tempLimit = 50; // Fahrenheit
let windLimit = 3.0; // Miles per hour

// Define a function to check if the inputs are valid
function checkInputs(temp, wind) {
  // Check if the inputs are numbers
  if (typeof temp !== "number" || typeof wind !== "number") {
    return false;
  }
  // Check if the inputs are within the specification limits
  if (temp > tempLimit || wind <= windLimit) {
    return false;
  }
  // If all checks pass, return true
  return true;
}
const input = document.querySelector("#Temperature");
const label = document.querySelector("#wsp");

label.addEventListener("click", () => {
    input.classList.toggle("value");
    label.classList.toggle("value");

})*/
// Define the input values for temperature and wind speed
let temp = 40; 
let wind = 5; // in miles per hour

// Define the specification limits for temperature and wind speed
let tempLimit = 50; // in Fahrenheit
let windLimit = 3; // in miles per hour

function doInputOutput () {
    const temp = parseFloat (document.querySelector("#temp").value);
    const wind = parseFloat (document.querySelector("#windSpeed").value);
    const itscold = windchill(temp,windSpeed)
    const div = document.querySelector("#output");
    div.innerHTML = itscold;

/*const input = document.querySelector("#tem");
const button = document.querySelector("#click");
button.addEventListener("click", () => {
    input.classList.toggle("output");
    button.classList.toggle("output");
})*/
function windchill (t,s) {
    const twe = 35.74 + 0.6215 * t -35.75* Math.pow(wind, 0.16) + .4275 * t * Math.pow(wind, 0.16);
    return twe;
// Check if the input values meet the specification limits
if (temp <= tempLimit && wind > windLimit) {
  // Calculate and display the wind chill factor
  let wcC = windChill(temp, wind); 
    wcC.innerHTML = "The wind chill factor is " + wcC.toFixed(2) + "°F.";
} else {
  // Display "N/A" (not applicable)
  wcC.innerHTML = "N/A";
}
}
}