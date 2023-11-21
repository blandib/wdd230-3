const baseURL = "https://blandib.github.io/wdd230-3/";
const linksURL = "https://blandib.github.io/wdd230-3/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
  
  //getLinks();

  const displayLinks = (weeks) => {
    const cards = document.querySelector('div.cards');
  
    weeks.forEach((week) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let Links = document.createElement('a');
      let url = document.createElement('a');
      let title = document.createElement('h3');
  
      h2.textContent = `${week.week} ${week.Links}`;
  
      Links.textContent = `Lesson: ${week.Links}`
      url.textContent = `Lesson: ${week.Links}`
  
      card.appendChild(h2);
      card.appendChild(Links);
      card.appendChild(url);
      card.appendChild(title);
  
      cards.appendChild(card);
    });
  }
  getLinks();
 