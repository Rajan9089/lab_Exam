//JavaScript function chaining
let x = 'Youstart';

console.log(x);
// var reversed = x.split('')      // string array me convert hua
// reversed = reversed.reverse();    // reversed array
// reversed = reversed.join('');     // join ek array function hai jisse wapas string ban gya
var reversed = x.split('').reverse().join('');    // function chaining sequence
console.log(reversed);


let cities = ['Delhi']
cities.push('Mumbai')
// cities.push('Mumbai').push('Goa');    // not compatible function chaining