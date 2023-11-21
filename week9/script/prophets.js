/*const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');
    let birthplace = document.createElement('birthplace')
    let birthdate = document.createElement('birthdate')

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = prophet.name + '' + prophet.fullname + '' + prophet.birthdate +'' + prophet.birthplace; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${portrait}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}*/

const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');

  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dob = document.createElement('p');
    let pob = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    dob.textContent = `Date of birth: ${prophet.birthdate}`
    pob.textContent = `Place of birth: ${prophet.birthplace}`

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}

getProphetData();