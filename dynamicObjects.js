//Dynamic nature of objects in JavaScript

const circle={
    radius:1,
    color:'Red',
    log(){

    }
}

//add more properties for circle object
circle.price=100;
//if we are adding function outside of object we have to write as below 
circle.draw=function(){}
console.log(circle)

//delete some properties
delete circle.price;
console.log(circle)