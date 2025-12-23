let arr=[1,2,3,4]
// console.log(arr[0])
// console.log(arr[2])

//also we can define array by
let arr2= new Array(2,4,5,6,7)
console.log(arr[2])


//we can push the element

// arr2.push(4)
// arr2.push(5)
// console.log(arr2)

//if we want to remove the last elemnet then 
//  arr2.pop()
//  arr2.pop()

 //if we want to add element from starting then
//   arr2.unshift(3)
// arr2.unshift(4)

// console.log(arr2)

//if we want to remove the element from starting then
// arr2.shift()
// console.log(arr2)


//if we want to change the array to string
 
const newArr= arr2.join()

// console.log(arr2)
// console.log(newArr)
//Here new array has typee of string
// console.log(typeof newArr)   //this gives string as type
// console.log(typeof arr2) //this gives object as type


//slice and splice

console.log(arr2.slice(1,3)) //it give the element from index 1 to 2 not include 3
console.log(arr2)   //this show that there is no change in arr2 after slice
console.log(arr2.splice(1,3))  //it give the element from index 1 to 3 but the most important differenee as shown is
console.log(arr2)   //it also change the parent array and now it has only those element left ehich is not present in splice





