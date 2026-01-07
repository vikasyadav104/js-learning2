//lets see how to iterate in object

const myObj={
    js: 'javascript',
    cpp:'c++',
    rb: "rubby "
}

//it is done by forin loop
// write forin 

for (const key in myObj) {
    // console.log(key) it give lhs value 
    console.log(myObj[key]) //it give rhs value
}



