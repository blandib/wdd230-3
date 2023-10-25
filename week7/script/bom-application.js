const currentYear = new Date();document.getElementById("year").innerHTML = currentYear.getFullYear();
//const date = new Date(document.lastModified);
//document.getElementById("lastModified").innerHTML = "Date of modification on "+'<br/>'+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" at time : "+date.getHours()+"hour "+date.getMinutes()+"minutes and "+date.getSeconds()+'seconds';

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last motifified on :" + date;


/*const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
// Open the JavaScript file
// Declare an array named chaptersArray
// Assign it to the results of a defined function named getChapterList
// This function does not exist, yet
// You can define it later according to your needs
const chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
    

button.addEventListener("click", () => {
if (input.value != "") { 
    displayList(input.value);  // make sure the input is not empty
    chaptersArray.push(input.value); // call the function that outputs the submitted chapter
    setChapterList(); // add the chapter to the array
    input.value = ""; // update the localStorage with the new array
    input.focus(); // clear the input
    input.focus(); // set the focus back to the input
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }
  function setChapterList() {
    localStorage.setItem("myfavBOMList", JSON.stringify(chaptersArray));
  }
  function getChapterList() {
    return JSON.parse(localStorage.getItem("myfavBOMList"));
  }
  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.lenght - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
}
});
});
chapter = chapter.slice(0, chapter.lenght-1);
chaptersArray = chaptersArray.filter((item => item !== chapter));
//input.focus();
//input.value = "";*/

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
  displayList(chapter);
  button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
    function displayList(item) {
      let li = document.createElement('li');
      let deletebutton = document.createElement('button');
      li.textContent = item; // note the use of the displayList parameter 'item'
      deletebutton.textContent = '❌';
      deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
      li.append(deletebutton);
      list.append(li);
      deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
      });
      console.log('I like to copy code instead of typing it out myself and trying to understand it.');
    }
    function setChapterList() {
      localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
    function getChapterList() {
      return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
  });
});
chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
chaptersArray = chaptersArray.filter((item) => item !== chapter);
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
