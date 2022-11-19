 
 const Person=require('./basic7')
 let day = 'Saturday'

 let subday = day.slice(0,4)
 console.log(subday)
 console.log(day[3])

 let splitday=day.split('r')[0]
 let splitdays=day.split('r')[1]
 console.log(splitday)
 console.log(splitdays.trim())

 //convert strin to integer
 let date='23'
 let nextdate='27'
 let diff=parseInt(date)-parseInt(nextdate)
console.log(diff)
 //convert integer to string
 diff.toString()

 let newQuote="Today is funday because its sunday"
 let count =0;
 let value =newQuote.indexOf("day")
 while(value!==-1){
count++
value=newQuote.indexOf('day',value+1)
 }
console.log(count)
 //console.log(day.indexOf('day'))
 let person=new Person("kajol","Prajapati");
 console.log(person.fullname())
 console.log(person.firstname)
