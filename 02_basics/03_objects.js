//we can declare objects by two ways
//1- literal 2- constructor

//and one thing you should remember is that there is no "SINGLETON" topic in literal but in constructor "singleton is present" 


const Mysym=Symbol("key1")

//literal object
const JsUser={
    email:"vikas@google.com",  //here email is automatically string ("email") but we write normal
    location:"firozabad",
    "my Name": "Monti",
    [Mysym]:"mykey1",   //most important thing is for symbol we have to write it in square bracket if we not use then it act as string
    isLoggedIn: "false",
    lastlogininDays: ["Monday","tuesday"]
}

//we can excess object information by two method 

// //1 method
// console.log(JsUser.email)
// //2 method
// console.log(JsUser["email"]) //in this way we always write in ""
//  //we alsways use second method it is bcoz 
//  console.log(JsUser["my Name"]) ///this name we can not excess by 1st method
//  console.log(JsUser[Mysym])   

 //if we want to change email then

 JsUser.email="vikas@chatgpt.com"
 //if i want that further no change will in gmail occur so i'll use
//  Object.freeze(JsUser) //after this no email will be change

 //lets understand some function


 //please do anything after make cmnt of freeze object
 let greeting=function(){
    console.log("hello world")   
 }
 console.log(greeting) ///this give function as output it means it give refreennce
 console.log(greeting())  //it run the function it also give undefined which we study further why it comes

 JsUser.greeting2=function(){
    console.log(`hello world, ${this.email}`)  ; 
 }
console.log(JsUser.greeting2())

 