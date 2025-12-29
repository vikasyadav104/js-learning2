//use of for each

 const array=["vikas","anmol","atul"]
//array.forEach(function(item){
//   console.log(item) 
// })


//now same thing but by arraw function

// array.forEach( (item)=>{
//     console.log(item);
// }) //same thing done by arrow function

//we can also do the same thing by declare function first and then insert in to for each loop

// function printme(item){
//     console.log(item)
// }
// array.forEach(printme)


//we can print index and also full array in one command

// function printme(item,index,arr){
//     console.log(item,index,arr)
    
// }

// array.forEach(printme) //in this we can get full array index and that particular item

//this forEach is used in array of objects


const myCoding=[
{
   languageName:"javascript"
},
{
     languageName:"python"

},
{
 languageName:"java"
},


]


myCoding.forEach(function(item){
    console.log(item.languageName)
} )