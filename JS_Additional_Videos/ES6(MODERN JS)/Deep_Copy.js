var person = {
  name: "Abhishek",
  age: 30,
  city: { name: "Delhi" }, // Nested object
};

var p1 = person; // reference copy not recommended

p1.name = "X";
console.log(person);

// shallow copy                        // Object.assign(targetObject , sourceObject)

var p2 = Object.assign({}, person); // person is coppied into {}
console.log(p2.city.name);

p2.city.name = "Mumbai";
console.log(p1.city.name); // nested object ka refrence hi copy hai
console.log(p1, p2); // is problem ko solve krne ke liye Deep Copy chahiye

// Deep Copy
var p3 = JSON.stringify(person); // object converted to string
console.log(p3);
p3 = JSON.parse(p3); // ab diffferent memory location pe same object cban gya
console.log(p3); // ab ye deep copyied hai

p3.city.name = "NY";
console.log(p3, person);
