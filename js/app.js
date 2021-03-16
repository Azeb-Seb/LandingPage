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
let liLists=["Section-1", "Section-2", "Section-3"];
const sections =['#section1','#section2','#section3'];
const navUl = document.querySelector("ul");
const sectionView = document.querySelectorAll('section');
let vewPortHeight = window.innerHeight;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addLi(){
    
    for(let i = 0; i < liLists.length; i++){
       let liList= liLists[i];
       let section = sections[i];
       const newLi = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = liList;
        a.setAttribute('href', section);
        newLi.appendChild(a);
        a.style.cssText = "color : green; text-decoration: none; ";
        navUl.appendChild(newLi);  
    }
    
}

// this gives a uneq look for the section at the view port

function activeSection(){
sectionView.forEach((e) => {
    window.addEventListener('scroll', function(){
        if(e.getBoundingClientRect().top < vewPortHeight){
            e.className = 'your-active-class';
        }else{
            e.className = 'new-class-name';
        }

    })
});}


addLi();
activeSection()


