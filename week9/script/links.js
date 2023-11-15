const baseURL = "https://blandib.github.io/wdd230-3/";
const linksURL = "https://blandib.github.io/wdd230-3/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();