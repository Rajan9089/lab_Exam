//class in javascript

// class Student{
//     constructor(name,age , hasWorkPermit , language){
//         this.name = name;
//         this.age = age;
//         this.hasWorkPermit = hasWorkPermit;
//         this.language = language;
//     }
//     getName() {
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }
// let student1 = new Student('Rajan',23,true,'english');   // kis type ka objeect wo v batata hai
// console.log(student1);
// console.log(student1.getName());
// student1.setName('Masum');
// console.log(student1.getName());
// console.log(student1);



//normal object

// let st2 = {
//     name:'Rajan',
//     roll:23,
//     hasWorkPermit:false
// }
// console.log(st2);      //nornaml object aisi koi baat nhi hai


// Object Shorthand in Javascript 

// let name = 'Abhishek';
// let age = 30;
// let PersonObject = {   // key - value pair nhi hai fr v result uper declared value se le lega
//     name,
//     age,
//     // city:'Haldia'
// }
// console.log(PersonObject);


//Map data type in JavaScript | HashMap in Javascript |

// let mp = new Map();
// mp.set('name' , 'Rajan');
// mp.set('age' , 30);
// console.log(mp);
// console.log(mp.size);
// console.log(mp.get('name'));
// console.log(mp.has('age'));

// mp.delete('age');
// console.log((mp));
// mp.set('city','Haldia');
// console.log(mp);

// mp.clear();
// console.log(mp);

// mp.set([1,2] , [3,4]);  // array => array
// mp.set(1,2);
// console.log(mp);



//SET Data type in JavaScript
//A set will have unique values

// let st = new Set();
// st.add(1);
// st.add(2);
// st.add(3);
// console.log(st);
// st.add(1);
// console.log(st);
// st.delete(1);
// console.log(st);


//ARRAY Destructuring, OBJECT Destructuring |

// const cities = ['NA','LA' , 'CA'];
// console.log(cities);

// const [a,b,c] = cities;
// console.log(a,b,c);
// console.log(a);

// const person = {
//     name: 'john',
//     age: 30,
//     mobile:12345
// }
// console.log(person);
// const {name , age , mobile} = person;  // variable name , age , mobile should be exactly matched
// console.log(name , age , mobile);         // props passing in React is a destructring too



//Getter and Setter in JavaScript

// const boy = {
//     firstName: 'John',
//     lastName : 'Smith',
//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     } ,
//     set fullName(name) {
//         if(name.length < 4){
//             console.log('Short name not allowed');
//         }else {
//             this.firstName =  name.split(' ')[0];
//             this.lastName = name.split(' ').slice(1).join(' ');
//         }
//     }
// }

// boy.fullName = 'john snow'; // initially no effect .. pehle setter banani padegi

// boy.fullName = 'J R'
// console.log(boy.fullName);
// // console.log(boy.fullName()); // galat hai in object ... class me shi tha

 




//Export vs Export default in JavaScript 
