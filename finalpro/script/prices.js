const dataURL = '';


fetch(dataURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);

        const businesses = jsonObject['prices'];
        businesses.forEach(displayBusinessesInGrid);
        businesses.forEach(displayBusinessesInList);
    });

    function displayBusinessesInGrid(prices) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let hr = document.createElement('hr');
        let HalfDay = document.createElement('p');
        let FullDay = document.createElement('p');
        

        h2.textContent = `${prices.prices}`
        FullDay.textContent = `${prices.FullDay}`
        HalfDay.textContent = `${prices.HalfDay}`
       
        media_card.appendChild(h2);
        media_card.appendChild(hr);
        media_card.appendChild(HalfDay);
        media_card.appendChild(FullDay);           
        cardDiv.appendChild(media_card);
    }

    function displayPricesInList(prices) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let HalfDay = document.createElement('p');
        let FullDay = document.createElement('p');
        

        h2.textContent = prices.prices
        HalfDay.textContent = prices.HalfDay
        FullDay.textContent = prices.FullDay
        
        
       
        media_card.appendChild(h2);
        media_card.appendChild(HalfDay);
        media_card.appendChild(FullDay);
        
            
        listDiv.appendChild(media_card);
    }
