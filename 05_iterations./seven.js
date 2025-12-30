//if i want to increase all elements by 10 then we can use map here

const myNums=[1,2,3,4,5,6,7,8,9]
// const newNums= myNums.map((nums)=>{return nums+10})

// console.log(newNums)

//chaining type function
//how can we use chain

const ans=myNums.map((nums)=> nums*10).map((nums)=>nums+1).filter((nums)=>nums>=40)
//so as how we can use chain

console.log(ans)

