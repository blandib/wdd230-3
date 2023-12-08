const url = 'https://blandib.github.io/wdd230-3/data/prices.json';
async function getPricesData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prices);
    displayPrices(data.prices);
  }
  
  const displayPrices = (prices) => {
    const cards = document.querySelector('div.cards');
  
    prices.forEach((price) => {
      let card = document.createElement('section');
      let HalfDay = document.createElement('p');
      let FullDay = document.createElement('p');
      
  
      
  
      HalfDay.textContent = `Half Day: ${price.HalfDay}`
      FullDay.textContent = `Full Day: ${price.FullDay}`
      
      
      
    card.appendChild(HalfDay);
    card.appendChild(FullDay);
    

    cards.appendChild(card);
});
}

getPricesData();

