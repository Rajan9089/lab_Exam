// 5.12 More Events

//Copy Event

let copyRightElement = document.querySelector('.copy');
copyRightElement.addEventListener('copy',()=>{
    console.log('Ooi! This is Copy right Content');
})

// Mouse Move event

let box = document.querySelector('.box')
box.addEventListener('mousemove' , (e)=> {
    // console.log(e.x,e.y);
    console.log(e.offsetX , e.offsetY);
})









// 5.11 Bubbling And Delegation
// koi v propagation to hamesha child se hi start hoga and parent tak bubbling hoga
//using this concept parent pe hi parent pe hi (Delegation) laga do
//(Delegation using bubbling event)

// const ulNew = document.querySelector('ul');
// // console.log(ul);
// ulNew.addEventListener('click' , (e)=>{

//     console.log('Inside UL');
//     // console.log(e);
//     if(e.target.nodeName == 'LI'){
//         e.target.remove();
//     }
// })









// 5.10 Creating And Removing Element

// Creating
// const ul = document.querySelector('ul');

// let button = document.querySelector('.clickMe');
// button.addEventListener('click' , ()=>{
//     let li = document.createElement('li');  // (let li) is a variable
//     li.textContent = 'Spmething new Added';
//     ul.append(li);
//     // ul.prepend(li);
// })








// 5.9 Event Basics

// let eventElement = document.querySelector('.clickMe')
// console.log(eventElement);
// eventElement.addEventListener('click' , ()=>{
//     console.log('I got clicked');
// })

// let listElemets = document.querySelectorAll('li');
// console.log(elemets);
//forEach loop ke andar addEventListener chal rha hai
// listElemets.forEach((element)=>{         
//     element.addEventListener('click' , (e)=> {
//         e.stopPropagation();
//         console.log('Inside li Item clicked');
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through'

//         // Removeing element
//         // e.target.remove();
//     })
// })




 
// 5.10 Creating And Removing Element

