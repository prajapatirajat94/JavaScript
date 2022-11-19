//object is collection of properties 
//declare it in like key and value format  Key:Value
let Person={

    Firstanem:"Rajatkumar",
    Lastname:"Prajapati",
    age:24,
    fullname:function()
    {
        console.log(this.Firstanem+" "+this.Lastname)
    }
}
console.log(Person.Firstanem)

//or

console.log(Person['Lastname'])

//to check properties is exist or not 
console.log('gender' in Person)
//for lough to call all propeerties
for(let key in Person){
console.log(Person[key])
}
console.log(Person.fullname())
let person2=new Person();