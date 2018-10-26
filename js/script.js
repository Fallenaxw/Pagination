/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements needed to reference and/or manipulate the page
const studentList = document.querySelectorAll('.student-item');
const pageDiv = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const form = document.createElement('form');


//Create and append search textbox to page 

pageHeader.appendChild(form);
form.appendChild(searchDiv);
searchDiv.className = 'student-search';
searchDiv.appendChild(input);
searchDiv.appendChild(button);
button.setAttribute('class','button');
input.setAttribute('placeholder','Search for students...');
button.textContent = 'Search';


// Created a function to hide all of the items in the list except for the ten on the starting page 

const showPage = (list,page) => {
   for (let i = 0; i < list.length; i++) {
    if (i >= (page *10)-10 & i <= (page*10)-1) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
    
  }
}

showPage(studentList,1);

// Created and appended the pagination links and set the active class on the first link

const appendPageLinks = (list) => {
  let div = document.createElement('div');
  let ul = document.createElement('ul');
  let pages = Math.ceil(list.length/10);
  if (document.querySelector('.pagination') !== null) {
    let parent = document.querySelector('.pagination').parentNode;
    let div = document.querySelector('.pagination');
    parent.removeChild(div);
  } 
    pageDiv.appendChild(div);
    div.className = 'pagination';
    div.appendChild(ul);
    for (let i = 1; i <= pages; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      a.setAttribute('href','#');
      a.textContent = `${i}`;
      li.appendChild(a);
      }
  
  const setActive = document.querySelectorAll('div.pagination li a');
  setActive[0].className = 'active';
  
  
      
      
  
  

    // Added functionality to the pagination buttons so that they show and hide the correct students when the corresponding link is clicked

div.addEventListener('click', (e) => {
    for (let i = 0; i < pages; i++) {
      const setActive = document.querySelectorAll('div.pagination li a');
      setActive[i].classList.remove('active');
      if (e.target.tagName === 'A') {
        showPage(list,e.target.textContent);
        e.target.className = 'active';
        } 
      }     
    });
  }
appendPageLinks(studentList);


 // No results display setup

 const ul = document.querySelector('.student-list');
 const li = document.createElement('li');
 li.textContent= 'No matching students';
 li.style.display ='none';
 ul.appendChild(li);

// Add functionality to search bar
// Grab user input
// Grab the names from the student list
// Loop over each name in the student list
  // If the user input matches anything from the student list
    // Display matches
    // Else display 0 matches



    form.addEventListener('keyup', (e) => {
      let resultList = [];
      const searchName = input.value.toLowerCase();
      for(let i = 0; i < studentList.length; i++) {
        studentList[i].style.display = 'none';
        li.style.display = 'none';
        let names = document.getElementsByTagName('h3')[i].textContent.toLowerCase();
        if (names.includes(searchName)) {
          resultList.push(studentList[i]);
        } 
        if (resultList.length === 0) {
         li.style.display = 'block';
        }
      }
      showPage(resultList,Math.ceil(resultList.length/10));
      appendPageLinks(resultList);
      resultList = [];
    });

