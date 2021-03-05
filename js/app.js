/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarMenu = document.getElementsByClassName("navbar__menu");

const section_one = document.getElementById("section1");
const section_two = document.getElementById("section2");
const section_three = document.getElementById("section3");
//const newLi = document.createElement('li');
let liLists=["Section1", "Section2", "Section3"];
const navUl = document.querySelector("ul");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addLi(){
    
    for(let i = 0; i < liLists.length; i++){
       let liList= liLists[i];
       const newLi = document.createElement('li');
        newLi.textContent = liList;
         newLi.style.color = "red";
       //consule.log(liList[i]);
        navUl.appendChild(newLi);
    }
    //navUl.appendChild(newLi);
    //document.body.appendChild(navUl);
   
    
}
addLi();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


