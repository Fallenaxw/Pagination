/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const list = document.querySelectorAll('.student-item');
const page = Math.floor(list.length/10);



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = (list,page) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] >= list[0] && list[i] <= list[9]) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
  
}

showPage(list,page);


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






