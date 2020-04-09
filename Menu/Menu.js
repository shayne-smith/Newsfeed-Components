/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenuComponent(itemsArray){

  // instantiate all the elements needed for a menu item
  const menu = document.createElement('div')
  const ul = document.createElement('ul')

  // setup the structure of the elements
  menu.appendChild(ul)

  // build unordered list structure with several li's
  itemsArray.forEach(menuItem => {
    let line = document.createElement('li')
    line.textContent = menuItem
    ul.appendChild(line)
  })

  // add .menu class to menu
  menu.classList.add('.menu')

  // select menu button using a DOM selector
  const menuButton = document.querySelector('.menu-button')

  // add click event listener to menu button and toggle '.menu--open' class
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('.menu--open')
  })

  return menu
}

let updatedMenu = createMenuComponent(menuItems)
let header = document.querySelector('.header')
header.appendChild(updatedMenu)
