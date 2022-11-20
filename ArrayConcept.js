//Arrays can store objects
const courses = [
              {id:1,name:'a'},
              {id:2,name:'b'}
];

//console.log(courses.includes({id:1,name:'a'})) // false because this is not the right way

const c1=courses.find(function(course){
return course.name === 'a'
})
console.log(c1)

const c2=courses.findIndex(function(course){
    return course.name === 'a'
    })
    console.log(c2)