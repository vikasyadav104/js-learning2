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

 