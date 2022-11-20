

const circle={

    radius:1,
    draw:function(){
       console.log('draw')
    }

}
//1.for -in loop
//this is the old way to clone
// const another = {};

// for(let key in circle){
// another[key]= circle[key];
// }
// console.log(another)

//2.using Object.assign method
// const another =Object.assign({},circle) //Object.assign({target},Source)
// console.log(another)

// const another1=Object.assign({ 
//                 Color:'Red'} ,circle)
//                 console.log(another1)
//     console.log(another1.draw())

//3.Usign spread... operator
const another = {...circle}
console.log(another)


