// var cities = ["Delhi" , "Mumbai" , "Chennai"];

var cities = [
    {name:"Delhi" , pin:100000},
    {name:"Mumbai" , pin:200000},
]

//conventional for loop
for(let i = 0;i<cities.length ; i++) {
    console.log(cities[i]);
    console.log(cities[i].name , cities[i].pin);
}


//for-of Loop 
for (const city of cities) {
    console.log(city);
    console.log(city.name , city.pin);
}


//forEach Loop
cities.forEach(element => {
    console.log(element);
    console.log(element.name , element.pin);
});