const currentYear = new Date();document.getElementById("year").innerHTML = currentYear.getFullYear();
//const date = new Date(document.lastModified);
//document.getElementById("lastModified").innerHTML = "Date of modification on "+'<br/>'+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" at time : "+date.getHours()+"hour "+date.getMinutes()+"minutes and "+date.getSeconds()+'seconds';

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last motifified on :" + date;
//humburger
const button = document.querySelector("#side-nav")
const menu =  document.querySelector(".menu")

menu.addEventListener("click", () => {
	button.classList.toggle("open");
	menu.classList.toggle("open");
});

//mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector(".content");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
	}
});

/*//-------Using the JSON data source, display the member information on the page------//
// Create a function that takes the data and returns a table element
function createTable(data) {
	// Create a table element
	let table = document.createElement("table");
	// Create a table header row
	let header = document.createElement("tr");
	// Create and append table header cells
	let headers = ["Name", "membership level", "experience", "email", "website URLs", "image","phone","addresses","Product/Industry"];
	for (let h of headers) {
	  let cell = document.createElement("th");
	  cell.textContent = h;
	  header.appendChild(cell);
	}
	// Append the header row to the table
	table.appendChild(header);
	// Loop through the data and create table rows
	for (let member of data.members) {
	  // Create a table row element
	  let row = document.createElement("tr");
	  // Create and append table cells for each member property
	  for (let prop in member) {
		let cell = document.createElement("td");
		cell.textContent = member[prop];
		row.appendChild(cell);
	  }
	  // Append the row to the table
	  table.appendChild(row);
	}
	// Return the table element
	return table;
  }
  
  // Get the element where the table will be displayed
  let container = document.getElementById("container");
  // Call the createTable function and append the result to the container
  container.appendChild(createTable(data));


  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}*/

 

// The function to create a card element for a member
function createCard(member) {
	// Create a div element with the class "card"
	var card = document.createElement("div");
	card.className = "card";

	// Create an img element with the member image
	var img = document.createElement("img");
	img.src = member.image;

	// Create a div element with the class "card-content"
	var content = document.createElement("div");
	content.className = "card-content";

	// Create a h3 element with the class "card-title" and the member name
	var title = document.createElement("h3");
	title.className = "card-title";
	title.textContent = member.name;

	// Create a p element with the class "card-text" and the member age and occupation
	var text = document.createElement("p");
	text.className = "card-text";
	text.textContent = "membership-level: " + member.membership-level ," + ", "experience:", " " + member.experience," + " ,"email:",  " " + member.email," +","website-URLs:", "" + member.website-URLs," +","image:", "" + member.image," +","phone:", "" + member.phone," +","addresses:", "" + member.addresses," +","Product-Industry:","" + member.Product-Industry;

	// Create a button element with the class "card-button" and the text "Contact"
	var button = document.createElement("button");
	button.className = "card-button";
	button.textContent = "Contact";

	// Append the img, title, text and button to the content
	content.appendChild(title);
	content.appendChild(text);
	content.appendChild(button);

	// Append the img and content to the card
	card.appendChild(img);
	card.appendChild(content);

	// Return the card element
	return card;
}

// The function to create a list item element for a member
function createListItem(member) {
	// Create a div element with the class "list-item"
	var item = document.createElement("div");
	item.className = "list-item";

	// Create an img element with the class "list-img" and the member image
	var img = document.createElement("img");
	img.className = "list-img";
	img.src = member.image;

	// Create a div element with the class "list-content"
	var content = document.createElement("div");
	content.className = "list-content";

	// Create a h4 element with the class "list-title" and the member name
	var title = document.createElement("h4");
	title.className = "list-title";
	title.textContent = member.name;

	// Create a p element with the class "list-text" and the member age and occupation
	var text = document.createElement("p");
	text.className = "list-text";
	text.textContent = "membership-level: " + member.membership-level ," + ", "experience:", " " + member.experience," + " ,"email:",  " " + member.email," +","website-URLs:", "" + member.website-URLs," +","image:", "" + member.image," +","phone:", "" + member.phone," +","addresses:", "" + member.addresses," +","Product-Industry:","" + member.Product-Industry;

	// Create a button element with the class "list-button" and the text "Contact"
	var button = document.createElement("button");
	button.className = "list-button";
	button.textContent = "Contact";

	// Append the title, text and button to the content
	content.appendChild(title);
	content.appendChild(text);
	content.appendChild(button);

	// Append the img and content to the item
	item.appendChild(img);
	item.appendChild(content);

	// Return the item element
	return item;
}

// The function to display the directory as cards
function displayCards() {
	// Get the container element
	var container = document.getElementById("container");

	// Clear the container content
	container.innerHTML = "";

	// Loop through the members array
	for (var i = 0; i < members.length; i++) {
		// Get the current member
		var member = members[i];

		// Create a card element for the member
		var card = createCard(member);

		// Append the card to the container
		container.appendChild(card);
	}
}

// The function to display the directory as a list
function displayList() {
	// Get the container element
	var container = document.getElementById("container");

	// Clear the container content
	container.innerHTML = "";

	// Loop through the members array
	for (var i = 0; i < members.length; i++) {
		// Get the current member
		var member = members[i];

		// Create a list item element for the member
		var item = createListItem(member);

		// Append the item to the container
		container.appendChild(item);
	}
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#container");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// The function to toggle between card and list view
/*function toggleView() {
	// Get the toggle button element
	var toggle = document.getElementById("toggle");

	// Check the current view mode
	if (toggle.textContent == "Toggle View") {
		// If the current view mode is card, change it to list
		toggle.textContent = "Toggle View";
		displayList();
	} else {
		// If the current view mode is list, change it to card
		toggle.textContent = "Toggle View";
		displayCards();
	}
}

// Display the directory as cards by default
displayCards();

// Add a click event listener to the toggle button
document.getElementById("toggle").addEventListener("click", toggleView);*/