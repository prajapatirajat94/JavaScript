
//Factory function its produces the objects
//use Name:-camel case notation: oneTwoThreeFour-start with lowecase then each words starts with uppercase
function createcircle(radius)
{ 
    const circle={
     radius,
     /* another way to create function*/
     /*
     draws:function(){
        console.log("i am function")
     },
     */
     draw(){
        console.log("i am function")
     }
        

    }
    return circle
}

const c1=createcircle(5)
console.log(c1)
//for -in loop
for(let key in c1)
{
    console.log(c1[key])
}

//Constructor
//also used to create objets:Name:- need to use pascal notation :- OneTwoThreeFour

function Circle(radius){
this.radius=radius;
this.draw= function(){
    console.log('draw',radius);
}
}

//how to call constructor functions use :new keyword
console.log("------------*********---------------");
const c=new Circle(1);
console.log(c);
console.log(c.radius);





