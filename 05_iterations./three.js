 //for of

//  let string="vikas"
//  for (const element of string) {
//     console.log(element)
    
//  }


//Map
const map= new Map()
map.set('IN', 'INDIA')
map.set('USA','Unite State of America')

// console.log(map)isse pura print ho jayega

for (const [key,value] of map) {
    console.log(key,':-',value)
    
}

//Now check for of loop for object.. lets see it will work or not

const myObj={
    'game1': 'spiderman',
    'game2':'freefire'

}

// for (const [key, value] of myObj) {
//     console.log(key,':-',value);
    
// }
 //it give errror which means we can not iterate the object from this way