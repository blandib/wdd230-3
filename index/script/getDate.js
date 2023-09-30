const currentYear = new Date();document.getElementById("year").innerHTML = currentYear.getFullYear();
//const date = new Date(document.lastModified);
//document.getElementById("lastModified").innerHTML = "Date of modification on "+'<br/>'+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" at time : "+date.getHours()+"hour "+date.getMinutes()+"minutes and "+date.getSeconds()+'seconds';

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last motifified on :" + date;

//humburger
const button = document.querySelector(".side-nav")
const menu =  document.querySelector("#burger-menu")

menu.addEventListener("click", () => {
	button.classList.toggle("open");
	menu.classList.toggle("open");
});









/*function myFunction(x) {
	x.classList.toggle("change");
  }
  
  function openSlideMenu(){
	document.getElementById('burger-menu').style.width = '100%';
  }
  
  function closeSlideMenu(){
	document.getElementById('burger-menu').style.width = '0px';
  }*/
  
  