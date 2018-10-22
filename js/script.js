/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const list = document.querySelectorAll('.student-item');
const pageDiv = document.querySelector('.page');
const div = document.createElement('div');
const ul = document.createElement('ul');
const pages = Math.ceil(list.length/10);



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
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

// Create and append the pagination links - Creating a function that can do this is a good approach
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
    const active = document.querySelectorAll('div.pagination li a');
    active[0].className = 'active';
    // Add functionality to the pagination buttons so that they show and hide the correct items
    // Tip: If you created a function above to show/hide list items, it could be helpful here

    active[0].addEventListener('click', (e) => {
      showPage(list,1);
    });

    active[1].addEventListener('click', (e) => {
      showPage(list,2);
    });

    active[2].addEventListener('click', (e) => {
      showPage(list,3);
    });

    active[3].addEventListener('click', (e) => {
      showPage(list,4);
    });

    active[4].addEventListener('click', (e) => {
      showPage(list,5);
    });

    active[5].addEventListener('click', (e) => {
      showPage(list,6);
    });
  }
appendPageLinks(list);




