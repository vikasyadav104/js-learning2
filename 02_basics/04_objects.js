 const Obj=new Object()
 console.log(Obj)

 const tinderUser={
 }
 tinderUser.id="abc123"
 tinderUser.email="vikas@google.com"
 tinderUser.isLoggedIn=false

 console.log(tinderUser)

 //if i want to create object inside object

 const regularUser={
    name:"Monti",
    fullname:{
        userName:{
            firstName:"vikas",
            lastName:"yadav",
        }
    }

 }
 console.log(regularUser.fullname.userName.firstName)

 //if i want to concat two object then

 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
 //wrong way

//  const obj3={obj1,obj2} //this is wrong bcoz when we do this then one oject just goes into another as it is without spreading
//  console.log(obj3)


//correct way

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)

//another way

const obj3={...obj1,...obj2}
console.log(obj3)

const user=[
    {
     id:"bc",
     name:"vikas",
    },
    {
    id:"bcd",
    name:"monti",
    },
    {
  id :"cde",
  name:"monti2",
    }

]
console.log(user[1].name)

//Some important things

//if i want to find key of any object as shown in lhs
console.log(Object.keys(tinderUser)) //it give all key in the form of array so we can also do multiple operations

//also we can find the values
console.log(Object.values(tinderUser))
// this give all data in bracket keys with thier values
console.log(Object.entries(tinderUser))

//to check is this property available ornot in object
console.log(Object.hasOwnProperty('isloggedIn'));