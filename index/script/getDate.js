const currentYear = new Date();document.getElementById("year").innerHTML = currentYear.getFullYear();
//const date = new Date(document.lastModified);
//document.getElementById("lastModified").innerHTML = "Date of modification on "+'<br/>'+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" at time : "+date.getHours()+"hour "+date.getMinutes()+"minutes and "+date.getSeconds()+'seconds';

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last motifified on :" + date;