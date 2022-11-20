//Enumerating properties in objects
//get all properties in objects
//check all properties in object


const circle={

    radius:1,
    draw:function(){
       console.log('draw')
    }

}

//1.for -in loop
console.log("------------------For in loop------------------")
for(let key in circle){
console.log(key,circle[key])


}
console.log("------------------For Of loop------------------")
//2.for -of loop
// this loop we use it for arrays 
for(let key of Object.keys(circle)){

    console.log(key)
}
console.log("------------------Entries------------------")

for(let entry of Object.entries(circle)){
console.log(entry)
}

//3.In operator 
//to check property in objects
 console.log('radius' in circle)
 console.log('draw' in circle)
