const baseURL = "https://blandib.github.io/wdd230-3/";
const linksURL = "https://blandib.github.io/wdd230-3/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
      }
  }
  
  getLinks();



  // Define a function named displayLinks that takes one parameter named weeks
function displayLinks(weeks) {
    // Loop through each week in the weeks array
    for (let week of weeks) {
      // Create a new paragraph element
      let p = document.createElement("p");
      // Set the text content of the paragraph to the week name
      p.textContent = week.url + "" + week.title;
      // Append the paragraph to the document body
      document.body.appendChild(p);
      // Loop through each link in the week.links array
      for (let link of week.baseURL) {
        // Create a new anchor element
        let a = document.createElement("a");
        // Set the href attribute of the anchor to the link url
        a.href = link.baseURL;
        // Set the text content of the anchor to the link title
        a.textContent = link.linksURL;
        // Append the anchor to the document body
        document.body.appendChild(a);
        // Create a new line break element
        let br = document.createElement("br");
        // Append the line break to the document body
        document.body.appendChild(br);
      }
    }
  }