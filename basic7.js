module.exports=class Person{


age=25
//get method we can use it for execute bunch of code or method
get location(){
    return 'canada'
}
// Constructor
constructor(firstname,Lastname){
    this.firstname=firstname
    this.Lastname=Lastname
}
//methods
fullname(){
    console.log(this.firstname+this.Lastname)
}



}
//to access Properties of class you need to create object
/*
let person = new Person("Rajat","Prajapati")
console.log(person.age)
console.log(person.location)
console.log(person.fullname())
*/