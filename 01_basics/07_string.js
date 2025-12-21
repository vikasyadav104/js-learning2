const name= "hitesh"
const repoCount= 50

// console.log(name+repoCount+"value")  //this is bad practice so generally we are not use it
console.log(`hello my name is ${name} ad my repo count is${repoCount}`); //this is latest way

//another way to make string
console.log("vikas")
const gameName= new String('hiteshhc')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__);  //we can excess the prototype by first open new window in brave then inspect then console then const gameName= new String('hiteshhc') then console.log(gameName)
//and after this we get the opetion of prototype


// but this protottype syntax give only empty bracket so how can be excess all other prototype 

// console.log(gameName.length) //gives lenghth
// console.log(gameName.toUpperCase()); //this is one of its prototype but orginal value of gamename is not change
// console.log(gameName.italics())

// console.log(gameName.charAt(2)) //it give the char present at index 2
// console.log(gameName.indexOf('h')); //it give the index of char t;

const newstring=gameName.substring(0,4); // substring give the string starting from index 0 to 3 (not 4)
// console.log(newstring)

const anotherString=gameName.slice(-8,4) //slice also do same thing but it also take negative value which actually give index -8+8=0 so actually index is 0
// console.log(anotherString)

const newString="    vikas    "
console.log(newString)    // it give output with same number of spaces as input 
console.log(newString.trim()) //but it remove all spaces and give normal string



const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) ///this replace %20 by - 
 
    
const sentence = "The quick brown fox jumps over the lazy dog.";
const index=4

console.log(sentence.charCodeAt(index))








