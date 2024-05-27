

// 5.8 Parent Children and Sibling
let parentElement = document.querySelector('.content')
//All childrent of parent
// console.log(parentElement);
// console.log(parentElement.children); // HTMLCollection(3) [p, div, h2]

//we can not run forEach Method on HTMLCollection so
//first it into array
console.log(Array.from(parentElement.children));
Array.from(parentElement.children).forEach((e)=>{
    e.classList.add('coders');
})


// Child Element
let childElement = document.querySelector('h1');
// Find the parent of specific child
console.log(childElement.parentElement);
console.log(childElement.nextElementSibling);
console.log(childElement.previousElementSibling);


 







// 5.7 Add, Remove And Replace Class
// let selectAButton = document.querySelector('.btn');
// console.log(selectAButton.classList);
 //Add the class
// selectAButton.classList.add('newClass');

//Remeove the class
// selectAButton.classList.remove('newClass');

//Replace the class
// selectAButton.classList.replace('mainclass' , 'main');


// selectAButton.addEventListener('click' , (e)=> {
//     console.log('pressed');
// })





// 5.6 Adding the style

// let heading = document.querySelector('h1');
// heading.style.color = 'red';
// heading.style.backgroundColor = 'yellow';






//5.5 Getting And Setting the Attribute
let coderDostLink = document.querySelector('a');
// console.log(coderDostLink);

//Get the attribute
// console.log(coderDostLink.getAttribute('href'));

//Set the attribute
coderDostLink.setAttribute('href' , 'https://www.youtube.com/watch?v=lGmRnu--iU8&t=18772s')
console.log(coderDostLink.getAttribute('href'));
coderDostLink.innerText = 'Complete JavaScript Course + Notes for Beginners in Hindi';






// 5.4 innerText Vs innerHTML
// first Select the content then try to update 

//Updating and changing content

//Innertext  
//.. it ignore space
//Retrieve ans set content in plane text

// let heading = document.querySelector('h1');
// let content = document.querySelector('.content');
// content.innerText = "<p>Great Coders</p>";
// content.innerText += "<p>Great Coders</p>";  // pehle wala v add ho jayega
// console.log(content.innerText);


//InnerHTML  
//.. it doesn't ignore space

//Retrieve and set content in HTML formate
// content.innerHTML = "<p>Great Coders</p>";
// content.innerHTML += "<p>Great Coders</p>";  // pehle wala v add ho jayega .. that is new wala append hota jayega
// console.log(content.innerHTML);














// 5.2 Query Selector
//other way to get html element

let querySelectorElement = document.querySelector('#coders');
// console.log(querySelectorElement);

// Get Elemet By tagName

let tagNameElement = document.getElementsByTagName('p');  //give html collection
// console.log(tagNameElement);

// Get Elemet By className
let classNameElement = document.getElementsByClassName('coderdost');  //HTMLCollection(2) [h2.coderdost, h2.coderdost]
// console.log(classNameElement);

// Get Elemet By Id

let elementById = document.getElementById('coders')
// console.log(elementById);



// 5.1 DOM Introduction

// console.log(document.URL);