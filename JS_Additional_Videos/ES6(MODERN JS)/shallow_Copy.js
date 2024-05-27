var person = {name:'Abhishek' , age:30}

var p1 = person  // reference copy not recommended

p1.name='X'; 
console.log(person);

// shallow copy                        // Object.assign(targetObject , sourceObject)
var p2 = Object.assign({} , person);   // person is coppied into {} 
// var p2 = Object.assign({city:'Delhi'} , person);
console.log(p2);
p2.name='Y';
console.log(p1 , person , p2);
