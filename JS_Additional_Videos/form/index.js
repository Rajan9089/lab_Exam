//Regular Expression part 2 (Regex)
//Basic form validation Using Regex
//Implementation Username validation
//username can only consist of A-Z or a-z
//lenght of username b/w 6 to 16
// Regex --->  /^[0-9A-Za-z]{6,16}$/    
///  or  /^[A-Za-z]{6,12}$/


// let form = document.querySelector('.sign-up-form')
// let user = document.querySelector('#name')
// let password = document.querySelector('#password');
// let userNamePattern = /^[0-9A-Za-z]{6,16}$/

// // ye submit hone ke baad apna feedback dega
// form.addEventListener('submit' , (e)=> {
//     e.preventDefault();
//     let username = user.value;
//     console.log(username);
//     // test() method return boolean values
//     let result = userNamePattern.test(username);
//     if(result == true) {
//         console.log('Username is Valid');         // Rajan9089
//     }else {
//         console.log('Username is Invalid .. Try Again');
//     }
// })





// Live Feedback

// user.addEventListener('keyup' ,(e)=>{
//     e.preventDefault();
//     if(userNamePattern.test(e.target.value)) {   // true
//         // console.log('Passed');   
//         user.setAttribute('class' , 'success');
//     }else {
//         // console.log('Failed');
//         user.setAttribute('class' , 'error');
//     }
// } )
























// Forms Events   (Submit Form)

//Form (Here password) velidation
//Regular expression (Regex) in pattern matching
//(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
// ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$
// - at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters






// let form = document.querySelector('.sign-up-form')  // submit kuch kiya hua hai uska eventListener banana chahenge
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// // let passwordPattern = "^(?=.*\d)(?=.*?[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$"  // length = [8 , 12]
// let passwordPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
// // console.log(form);
// form.addEventListener('submit' , (e)=>{
//     e.preventDefault();           //event ko aage pass hone se and iske default behaviour ko v rokta hai
//     // console.log('submit the form successfully');
//     // console.log(email.value , password.value);   //querySelector bana ke .value
//     // console.log(form.email.value , form.password.value);  // (input type).value se
//     // console.log(form.userEmail.value , form.userPassword.value);  //(class name).value se ... morre preferrable
//     let passwordValue = password.value;
//     console.log(passwordValue);    // Coder123
// // match method doesn't returns boolean value  
//     let result = passwordValue.match(passwordPattern);
//     // let result = passwordPattern.test(passwordValue);   // wrong hai
//     console.log(result);
//     if(result) {
//         console.log('Your password is strong');
//     }else {
//         console.log('Weak password .. Try Again!');
//     }
// })
