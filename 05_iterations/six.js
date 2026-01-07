//filter 

const array=[1,2,3,4,5,6,7,8,9]

// const newNums=array.filter((num)=> num>4)

// console.log(newNums)
//this is one way



//now in parenthesis
// const newNums=array.filter((nums)=> {  //here we take curly bracket which means we use scope
//     return nums>4  //dont forget to take return in this case
// })
// console.log(newNums)

//now if i want to filter bu use of for each function
const newArray=[]

//this is also one way
// array.forEach((nums)=>{
//     if(nums>4) console.log(nums)

    
// })


//Other way

//if we store elements in other empty array

array.forEach((nums)=>{
  if(nums>4) newArray.push(nums)
})

console.log(newArray) ///it also give number greater than 4

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const ans= books.filter((bk)=> bk.genre==='Science') //from this way we can iterate array of objects

  //also we can iterate through different typesss

  console.log(ans)
