//Some Important about arrray

let marvel_Heros=["spiderman","ironman","thor"]
let dc_heros=["superman","batman","vikas"]

// marvel_Heros.push(dc_heros)
// console.log(marvel_Heros)
// console.log(marvel_Heros[3][0])
// console.log(marvel_Heros[3][1]) //but this is not good way bcoz all element present in dc pussh in marvel in only one elemenet

//so what should i do

console.log(marvel_Heros.concat(dc_heros)) //this is one way 
//also one of the easy method is spread

const all_new_heros=[...marvel_Heros,...dc_heros]
console.log(all_new_heros)  //we commonly uss this method for conact two or more than 2 array in single array

 //One of the most important thing

 const another_Array=[1,2,3,[4,5,6],7,[5,6]] //if we have this type of arrray then

 const another_Array_Flat=another_Array.flat(Infinity)
 console.log(another_Array_Flat)  //this give flat array means no interm]nal array

 //if we want to check is it arrray or not then

 console.log(Array.isArray("vikas")) //it give false as output bcoz vikas is not a array it is string
 console.log(Array.from("vikas"))  //it givess array of vikas