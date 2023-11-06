
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

// 1️⃣ Initialize display element variable
/*const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
  visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if(numVisits !==1) {
  visitsDisplay.textContent = `Back so soon! Awesome!`;
	//visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}else {
  visitsDisplay.textContent = `You last visited n days ago`
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.*/
// Get the current date and time
 
//localstore
// Save the current date to localStorage
localStorage.setItem('lastVisit', new Date().getTime());

// Retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');
// Get the current date and time
const currentDate = new Date();

// Get the last visit date and time from localStorage
const lastVisitDate = new Date(parseInt(localStorage.getItem('lastVisit')));

// Calculate the difference between the two dates in milliseconds
const differenceInMilliseconds = currentDate - lastVisitDate;

// Calculate the difference between the two dates in days
const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

// Get a reference to the sidebar content area
const sidebarContentArea = document.querySelector('.sidebar-content-area');

// Check if this is the user's first visit
if (lastVisit === 0) {
  sidebarContentArea.textContent = `Welcome! Let us know if you have any questions`;
} else if (differenceInDays === 1) {
  sidebarContentArea.textContent = `Back so soon! Awesome!`;
} else {
  const message = `You last visited ${differenceInDays} ${differenceInDays !== 2 ? 'day' : 'days'} ago.`;
  //sidebarContentArea.textContent = message;
}
//------------form page
 // get the current date and time in ISO format
 var now = new Date().toISOString();
 // get the hidden input element by id
 var timestamp = document.getElementById("timestamp");
 // set the value of the input element to the current date and time
 timestamp.value = now;

 const form = document.querySelector("#form");
const input = document.querySelector("#title");
const output = document.querySelector("#output");

const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(titleInput) {
  const ok = re.exec(titleInput.value);

  output.textContent = ok
    ? `Thanks, your Business/Organization is ${ok[0]}`
    : `${titleInput.value} Business/Organization must have seven Charater!`;
}

form.addEventListener("Join", (event) => {
  event.preventDefault();
  testInfo(input);
});