// example of map method
let cities = ["NY","LA","DC"];
let lowerCities = cities.map( (city)=> city.toLowerCase());    //city is an iterator
console.log(lowerCities);

let words = ["animal" , 'bird' , 'insect'];
let countLength = words.map(word=>word.length);                //word is an iterator
console.log(countLength);

//example of filter function
var people = [           // list of people
    {name:"abc",age:30},
    {name:"xyz",age:50},
    {name:"yyy",age:20},
    {name:"zzz",age:10},
]
// console.log(people);
// let filteredList = people.filter( person=>person.age > 25 );
let filteredList = people.filter( person=>person.age > 25 || person.name == 'zzz');
console.log(filteredList);

//example of reduce function
let sum = people.reduce(
    (total,person)=>total+person.age , 0)     //total = accumulater and person = iterator

console.log(sum);

let concatenateNames = people.reduce(
    (nameaccumulator,personIterator)=>nameaccumulator+":"+personIterator.name,"")
 
console.log(concatenateNames);
