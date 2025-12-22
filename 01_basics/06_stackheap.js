// Stack store all primitive value
//what does it mean-- it means that in stack values are only copy means when i change it by copying then the original value donot change
// Heap store all the non primitive value-- it means value is giving by reference it means when i change one value then automatically change the value of second

//now lets take some example

let myName="Vikas"
let secondName=myName
secondName="yadav"

console.log(myName)

console.log(secondName)
// so what does it mean it means when i copy the value of myName in secondName so now secondName have Vikas but then we change the value of second name from Yadav
// so this will contain in stack

//for heap

let vikas={
    email:"vikasyadav@gmail.com",
    study:"btech",
}
let monti=vikas
monti.email="monti@gmail.com"

console.log(vikas.email)

console.log(monti.email)
// so here on changing the value of monti gamil then vikas gmail is automaticlly change
//it is bcoz of heap

//you can also understand by the diagram which is present in yur your whatsapp (stack and heap)