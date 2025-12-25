 function saymyname(){
    console.log('v')
    console.log('i')
    console.log('k')
    console.log('a')
    console.log('s')
 }

 saymyname()

 //if i want to make function of adding 2 digit

//  function addTwonumber(number1, number2){
//     console.log(number1+number2)
//  }
 addTwonumber(5,3)

 //if i want to store this function to any var lets say
 const result=addTwonumber(5,3)
 console.log(result)  //so it give undefined becoz function do not return value so it give undefined 

  function addTwonumber(number1, number2){
    return number1+number2
 }

 const ans=addTwonumber(3,6)
 console.log(ans)  //now it give finite value 
//  function loginusername(username){
//     if(username===undefined){ //you can also (!username) in this way
//         console.log("please enter username")
//         return
//     }
//         return `${username} just logged in`
//  }
//  console.log(loginusername("vikas")) //if i keep empty bracket instead of vikas then if statement will wrok
 

 //now i want that code never go for undefined if i donot pass the value then it automatically go for a choicable name

 function loginusername(username="sam"){
    if(username===undefined){ //you can also (!username) in this way
        console.log("please enter username")
        return
    }
        return `${username} just logged in`
 }
 console.log(loginusername())  

 //Some important keys 

//if we dont know number of values passes in function for examplw

// function myCartNumber(num1){
//     return num1

// }
// console.log(myCartNumber(200,300,400))
//here er have three values but in function only one parameter so ho can we manage


//we use three dots
 function myCartNumber(...num1){
     return num1
 }
 console.log(myCartNumber(200,400,500)) //this print all the value present as paramater

 const user={
    name:"vikas",
    price:"3000",

 }
 function handleObject(anyobject){
    console.log(`username id ${anyobject.name} and price is ${anyobject.price}`)
 }

//  handleObject(user)
//we can also print data directly

handleObject({
    name:"sam",
    price:"300",
})

 ///it will print username id vikas and price is 300