/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Adde variables that store DOM elements needed to reference and/or manipulate the page
const list = document.querySelectorAll('.student-item');
const pageDiv = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const div = document.createElement('div');
const searchDiv = document.createElement('div');
const ul = document.createElement('ul');
const pages = Math.ceil(list.length/10);
const input = document.createElement('input');
const button = document.createElement('button');


//Create and append search textbox to page 
pageHeader.appendChild(searchDiv);
searchDiv.className = 'student-search';
searchDiv.appendChild(input);
searchDiv.appendChild(button);
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
showPage(list,1);

// Created and appended the pagination links and set the active class on the first link
const appendPageLinks = (list) => {
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
    // Added functionality to the pagination buttons so that they show and hide the correct students when the corresponding link is clicke
     div.addEventListener('click', (e) => {
      for (let i = 0; i < pages; i++) {
        setActive[i].classList.remove('active');
        if (e.target.tagName === 'A') {
          showPage(list,e.target.textContent);
          e.target.className = 'active';
        } 
      }     
    });
  }
appendPageLinks(list);




