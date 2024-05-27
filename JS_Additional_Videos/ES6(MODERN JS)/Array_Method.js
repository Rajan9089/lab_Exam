let letters = ["a","b","c","d"]
// console.log(letters);

// ************Reverse ***************(Mutate the original array)

// let revLetters = letters.reverse();
// console.log(revLetters);
// console.log(letters);


//***************** */ concat  ************   (non-mutating)

// let nums = [1,2,3,4];
// let concated = nums.concat(letters);
// console.log(concated);
// console.log([...nums , ...letters]);   // using spread operator
// console.log([...nums , ...concated]);  // using spread operator

//Join      (non-mutating)

// let joined = letters.join('-');   // ',' comma as a default separator  
// console.log(joined);
// console.log(typeof joined );


//************ */ Slice Method***********     (non-mutating)
//used to Extract part of the array
//Array.slice(startIndex , lastIndex(excluded));
//Return new Array of extracted elements
// let num = [3,5,7,9,2];
// let extractedArray = num.slice(1 , 4);     // 1-3 // num.slice(1); // 1-last 

// console.log('original array: ',num);
// console.log('Extracted array: ',extractedArray);



//**************** Splice method ******************** (Mutating Method)
//Used to add new element/s into the array
//Array.splice(index , deleteValue , valueToBeAdded)
//Renturn deleted items in the form of array

// let num = [3,5,7,9,2];
// let updated = num.splice(1,1,10);     //[ 3, 10, 7 , 9, 2 ]       [ 5 ]
// let updated = num.splice(1,2,10);     //[ 3, 10, 9, 2 ]        [ 5, 7 ]
// let updated = num.splice(1,0,6);           // [ 3, 6, 5, 7, 9, 2 ]         []
// let updated = num.splice(1,0,  6,6,66);      //Original Array:  [3, 6, 6, 66, 5, 7, 9,  2]     Updated Array:  []

// console.log('Original Array: ',num);
// console.log('Updated Array: ',updated);
 

// ***********at Method*********
//at Method can also work on string

//Getting last element of the string
// let name = "Larry";
// console.log(name[0]);
// console.log(name.at(0));
// console.log(name.at(-1));   



// let num = [23,54,77,85];
// console.log(num[0]);
// console.log(num.at(0));

//Getting last element of the array

// console.log(num.at(-1));     // 85
// console.log(num.at(-2));     // 77

// console.log(num[num.length -1]);     // 85
// console.log(num.slice(-1));      // last element in the array form  .. [85]
// console.log(num.slice(-2));          // [77 , 85]
 
// console.log(num.slice(-1)[0]);        // 85



//****************** */ "find" Method **********************
// it return first element we are looking for ... if could not get that element then return undefined

// let students = [{id:1,name:"Alex"} , {id:2,name:"john"},{id:1,name:"Paul"} ];

// let result = students.find(itr => {
//     return itr.id === 1;                  //return itr.id === 1; gives undefined as o/p when not present      
// })

// console.log(result);            // { id: 1, name: 'Alex' }







//************************** */ "findIndex" Method *******************************

//Execute function for each array element
// it return "index" of that array element who "first" pass the
// test "otherwise" -1


// let ages = [11,18,19,17,23]

// let output = ages.findIndex(age => {
//     return age > 15;
// })
// console.log("Index of required age: ",output);       //Index of required age:  1  --> 1th element satisfy the criteria





//********************* */ "some" and "every" Method **************************    like OR and AND condition

// some method return "true" if "any" array element passes the test
// every method return "true" if "all" array element pass the test

// let scores = [25 ,34,67,65,80,92]

// let res = scores.some(score => {
//     return score > 92;
// })
// console.log("some method: ",res);

// let newScores = [25 ,34,67,65,80,92]

// let newRes = newScores.some(score => {
//     return score > 24;
// })
// console.log("some method: ",newRes);





// ********************* "flat" Method (un-Mutable)*******************************

// it creates a new array with the elements of the subarrays
// "conactenated" into it.
// nested array get flat to single array

// let arr = [1,2,3,[4,5,6,[7,8,9]]];
// console.log("Before flat: ",arr);

// // let ans = arr.flat();  // by default flat 1(depth value)... (1 nested array)
// let ans = arr.flat(2);
// console.log("Aftet flatening: ",ans);













//********************* "flatMap" Method *******************************

//it is the combination of the "map()" method
//followd by the "flat" method of depth "1"

let cart = [{
    name:"Mobile Phone",
    qty:2,
    price:500
},
{
    name:"Tablet",
    qty:1,
    price:1000
}]

// let newCart = cart.flatMap(item =>{         
//     if(item.name === "Mobile Phone") {
//         return [item ,{
//             name:"Screen Protector",
//             qty:1,
//             price:0
//         }]
//     } else {
//         return [item];
//     }
// })
// console.log(newCart);  

// let newCart = cart.map(item =>{         
//     if(item.name === "Mobile Phone") {
//         return [item ,{
//             name:"Screen Protector",
//             qty:1,
//             price:0
//         }]
//     } else {
//         return [item];
//     }
// })

// console.log(newCart.flat());   // it gives same as flatMap     

//in case of flatMap   ... console.log(newCart); gives 
// [
//     { name: 'Mobile Phone', qty: 2, price: 500 },
//     { name: 'Screen Protector', qty: 1, price: 0 },        
//     { name: 'Tablet', qty: 1, price: 1000 }
// ]


// in case of map
// [
//     [
//       { name: 'Mobile Phone', qty: 2, price: 500 },        
//       { name: 'Screen Protector', qty: 1, price: 0 }       
//     ],
//     [ { name: 'Tablet', qty: 1, price: 1000 } ]
// ]









//********************* "sort" Method *******************************
// but "sort" method it evaluate array element as string only
let str = ["d","e","f","a","b"];

console.log(str.sort());

let number = [2,5,7,-2,-22,-43];    // unexpected       // [ -2, -22, -43, 2, 5, 7 ]
console.log("unsorted number: ",number);

// if a-b < 0 => a < b => A,B (keep the order same)
// if a-b > 0 => a > b => B,A (switch the order same)


// number.sort((a,b)=> {
//     if(a<b) {
//         return -1; // Any num less than 0
//     }
//     if(a>b){
//         return 1; // Any num greater than 0;
//     }}
// )

//Assending order
number.sort((a,b) =>{
    return a-b;
})

// //Desending order
// number.sort((a,b) =>{
//     return b-a;
// })
console.log("Sorted" , number);









