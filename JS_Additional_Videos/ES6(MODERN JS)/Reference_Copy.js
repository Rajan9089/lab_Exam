var person = {name:'Abhishek' , age:30}

var p1 = person  // reference copy not recommended
console.log(p1);

p1.name='X'; 
console.log(p1 , person);   // original and referenced object both point to the same memory location


// reference copy happens in variable and Array

var cities = ['Delhi' , 'Mumbai']

var metros = cities;   // reference copy not recommended in JavaScript

metros.push('kolkata');
console.log(metros , cities);  // yha metro me push hua ye too shi hai but cities me to ni hona chahiye tha n
