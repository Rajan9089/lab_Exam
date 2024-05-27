// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls , cryptography , network

//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Rajan", email: "kumar9089rajan@gmail.com" }); //parameter passed generally as object or(array/function whatever)
//   }, 1000);
// });

// promiseThree.then(function (user) { 
//   console.log(user);        // here user will print every thing present in object
// });

// const PromiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {     // here else walapart chalega
//       resolve({ username: "Rajan", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// PromiseFour.then(function (user) {
//   console.log(user);
//   return user.username;
// })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
})

// .then((e)=>{
//   console.log(e.password);         //option1):-- ye to kar hi sakte hai
// })
// .catch((e)=>{
//   console.log(e);
// })


//option2):-- using async - await

// async function consumePromiseFive(){
//     const response = await promiseFive;    // Here async await directly error ko handle ni kar sakta ...
//     console.log(response);                 // aise promise design hai jha pe error ni aa sakti to wha ye perfectly chalega
// }
async function consumePromiseFive() {
  try {
    const response = await promiseFive; // Here async await directly error ko handle ni kar sakta ...
    console.log(response); // error ko try catch lga ke handle ka sakte hai
  } catch (err) {
    console.log(err);
  }
}
consumePromiseFive();



//option3):-- using async - await
async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        const data = await response.json();
        console.log(data);
    }catch (err){
        console.log('E:' , err);
    }
}
getAllUsers();



// //same thing getAllUsers() ... done using then catch

fetch("https://jsonplaceholder.typicode.com/users")     // here fetch v ek promise return karegi
  .then((response) => {   // response word can be anything
    return response.json();
    // return response;
  })
  .then((dataReturnFromFirstTHEN) => {
    console.log(dataReturnFromFirstTHEN);
    // console.log(dataReturnFromFirstTHEN[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

  /*
    response.json() Explained: The response object has several methods to handle the body content of the response in various formats (like text, blob, formData, and json). 
    
    The .json() method is specifically used to read the response body and parse it as JSON. Since the parsing of the response body to JSON is an asynchronous operation (it could take some time depending on the size of the response), the .json() method returns a promise. This promise resolves with the result of parsing the response body text as JSON.
  */