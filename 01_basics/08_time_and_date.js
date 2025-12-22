let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toISOString()) //give normal time
// console.log(myDate.toString()) //give time and in string
// console.log(myDate.toJSON())  //this will give time in Json
// console.log(myDate.toLocaleDateString()) //this give only date in form of 12/22/2025
// console.log(myDate.toLocaleString()) //this give date and time in form of 12/22/2025, 9;34:38
// console.log(myDate.toLocaleTimeString())    //IT GIVES TIME IN THIS FORM OF 09:34:28
// console.log(myDate.toTimeString())    //IT GIVE ONLY TIME


//NOW IF I WANT TO CREATED DATE AND TIME NOT ORIGINAL THEN HOW?

// let myCreatedDate=new Date(2023,0,14) //most imp thing is in this format months are start from 0 month
// console.log(myCreatedDate.toLocaleString()) //this will only give output of date and for time it give 00:00:000

// let  myCreatedDate2=new Date(2023,0,24,2,3,5) //this means 2 hr 3 min and 5 sec
// console.log(myCreatedDate2.toLocaleString())  
//use of to local string make more readable output


//another format

let myCreatedDate=new Date("12-01-24") //in this format months are starting from 1
console.log(myCreatedDate.toLocaleString())

//If I want to compare two time then we only convert it into milliseconds how?

console.log(Date.now()) //output it in millisecond
console.log(myCreatedDate.getTime()) //also output it in millisecond
//so we can easily compare 

let newDate= new Date()
console.log(newDate.getMonth()) //month always started from 0 so if output is 11 then output is 12 
newDate.toLocaleString('default', {
    weekday: "long" //weekday come by pressing ctrl+space
})







