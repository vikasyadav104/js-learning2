 //why we not use var instead of let

 if(true){
    let a=10
    const b=20
    // var c=200 never use it 
 }
//  console.log(a) //they will not print coz a is defined only in loop not outside from loop
//  console.log(b) //they will not print coz a is defined only in loop not outside from loop
//  console.log(c)   //but it will print this will give more confusion so we never use var in loop

 //Nested Function

 function one(){
    const website= "vikas@google.com"
    function two(){
        const website2="monti@gmail.com"
        console.log(website2)
    }
    //two()
 }
//  one() 

if(true){
        const username="vikas"
        if(username==="vikas"){
            const web=" youtube"
            // console.log(username+web)
        }
}

//as this much knowledge we know that fucntion can be defined in two way

//1st one


function addone(num){
    return num+1

}

console.log(addone(5))

// const addtwo=function(num){
//     return num+2
// }

// console.log(addtwo(5)) /this work fine but if i give this cmmanad before function then it will noy wrok
