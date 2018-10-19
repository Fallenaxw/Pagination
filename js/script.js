/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const list = document.querySelectorAll('.student-item');
const pageHeader = document.querySelector('.page-header');
const page = Math.ceil(list.length/10);
const pageDiv = document.querySelector('.page');
const input = document.createElement('input');
const div = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');
const a = document.createElement('a');
const button = document.createElement('button');


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = (list,page) => {
  for (let i = 0; i < list.length; i++) {
    if (i >= 0 && i <= 9) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}
showPage(list,page);

// Create and append search bar
pageHeader.appendChild(input);
input.style.type ='text';
input.setAttribute('placeholder','Search for students...');

// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (list) => {
  pageDiv.appendChild(div);
  div.className = 'pagination';
  div.appendChild(ul);
  for (let i = 1; i <= page; i++) {
    let li = document.createElement('li');
    li.innerHTML = '<a href="#">' + i + '</a>';
    ul.appendChild(li);
    }
  }
appendPageLinks(list);


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
