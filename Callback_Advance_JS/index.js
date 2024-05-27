// function getCheese() {
//     setTimeout(() => {
//         const cheese = "🧀"
//         console.log("here is cheese",cheese);      
//     }, 2000);
// }
// console.log(getCheese());



function getCheese(Callback) {
    setTimeout(() => {
        const cheese = "🧀"
        console.log("here is cheese",cheese);
        Callback(cheese)
    }, 2000);
}
// getCheese((cheese)=>{
//     console.log("Got the cheese ",cheese);
// });
function makeDough(cheese , Callback){
    setTimeout( ()=> {
        const dough = cheese + "🍩";
        console.log("here is the dough",dough);
        Callback(dough);
    } , 2000);
}
// getCheese( (cheese) => {
//     makeDough(cheese , (dough)=>{
//         console.log("Got my dough",dough);
//     });
// });

function makePizza(dough , Callback){
    setTimeout( ()=>{
        const pizza = dough + "🍕";
        console.log("here is the pizza",pizza);
        Callback(pizza);
    },2000);
}
getCheese( (cheese) => {
    makeDough(cheese , (dough)=>{
        makePizza(dough, (pizza)=> {
            console.log("Got my pizza",pizza);
        });
    });
});
// Pizza --> dough --> cheese