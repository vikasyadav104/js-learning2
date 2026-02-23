// const promiseOne= new Promise(function(resolve,rejecr){
//     //do async work like calling database or calling api
//      setTimeout(function(){
//         console.log("Async task completed");
//        resolve()// if i remove this line then promiseOne.then will never execute because promise is not resolved so it will be pending state only
//      },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// // in upper code we use two times but we can also use only one time like this

// new Promise(function(resolve,rejecr){
//     //do async work like calling database or calling api
//     setTimeout(function(){
//          console.log("Async task completed 2");
//          resolve();
//     },1000)
// }).then(function(){
//     console.log("promise consumed 2")
// })


// // now we can also pass value in resolve and then call in then function like this
// new Promise(function(resolve,rejecr){
//     //do async work like calling database or calling api
//     setTimeout(function(){
//         resolve({userName:"john",email:"john@example.com"})
//     },1000);
// }).then(function(user){ 
//     console.log(user);
// })

// //now we can also handle error in promise like this
// const promiseTwo= new Promise(function(resolve,reject){
//     let error=false;
//     if(!error){
//         resolve({userName:"john",email:"john@example.com"})
//     }
//     else{
//         reject("Error: Something went wrong")
//     }
// })

// promiseTwo.then(function(user){
//     console.log(user);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("Promise is either resolved or rejected")
// })

// //we can also use async await to consume promise like this

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
    let error=false;

    if(!error){
        resolve({userName:"VIKAS",email:"john@example.com"})
    }
    else{
        reject("Error: Something went wrong")
    }
},1000)
})

async function consumePromise(){
    try{
        const response =await promiseThree;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
    }
consumePromise()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })


