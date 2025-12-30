 //Reduce method

 //this method is used during the shoping

 const array=[3,4,5]

 //this is syntax of reduce in normal funciton

//  const newAns=array.reduce( function(accumulate,currentval){
//     return accumulate+currentval
//  },0)
//  //this is syntax of reduce function
// // so here accumulate initial value is 0 because at last of function we denote inintial value as 0, aftwr that accumulate value will change and equal to current function value


//  console.log(newAns)

// this is syntax in arraw function

//  const newAns=array.reduce((accumulate,currentval)=> accumulate+currentval,0)

//  console.log(newAns)

 const myObj=[
    {
        itemName: "data science course",
        price: 12999,
    },
 
    {
        itemName: "data science course",
        price: 12999,
    },
 
    {
        itemName: "data science course",
        price: 12999,
    },
 
    {
        itemName: "data science course",
        price: 12999,
    },
 ]

 //if i want to calculate the total price of this object
 //then we use reduce

 const ans=myObj.reduce((acc,item)=> acc+ item.price,0)  //this is how we add the prize item
 console.log(ans)
