
//to declare variable
//1.
var marks = Array(6);
//2.
var marks =new Array(20,40,35,12,37,100);
//3.
var marks =[20,40,35,12,37,100];

submarks=marks.slice(2,5);
console.log(submarks);

//To access Array variable 
console.log(marks[3]);
marks[3]=14;
console.log(marks[3]);
console.log(marks);
console.log(marks.length);
//To add elements
marks.push(65);
console.log(marks);
//to delete last element from array
marks.pop();
console.log(marks);
//to add elemets begin of the array
marks.unshift(12);
console.log(marks);
//to check index of the value
console.log(marks.indexOf(100))
//to check array contains value or not
console.log(marks.includes(100))
console.log(marks.includes(11))

var sum=0
for(let l=0;l<marks.length;l++){
sum = sum+marks[l]
}
console.log(sum)
//Reduce filter map
let total=marks.reduce((sum,totalmarks)=>sum+totalmarks,0)
console.log(total)

//
let scores =[12,13,14,16]
 let newArrayList=scores.filter(scores=>scores%2==0)
 console.log(newArrayList)

 //Map array function 
 let MappedArray = scores.map(scor=>scor*3)
 console.log("------*******-----------******-------")
 console.log(MappedArray)
 
//Sorting arrays in order
 let fruits = ["Banana","Apple","Calcium"]

 let sortedfruits=fruits.sort()
 console.log(sortedfruits)

 //Sort integer
 let Descentorder=scores.sort((a,b)=>b-a)
 console.log(Descentorder)
