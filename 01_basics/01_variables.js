const accountId = 144434    //declation of constant this is value which cannot be changed further
let accountEmail = "vikasyadav@gmail.com"  //this is variable which can be changed further and we can use 'let' for defining the variable 

 var accountPassword ="12344" // this is variable which can be changed further and we can use 'var' for defining the variable but its use is discouraged in modern javascript
accountCity= "Jaipur"  //this is also way for defining variable without any keyword but its use is discouraged in modern javascript


//updating the variables
accountEmail= "hdfc@gmail.com"
accountPassword= "67890"    
accountCity= "Mumbai"
 // prefer not to use var coz this will block the scope and functional scope

console.log(accountId);  //printing the value of constant
console.table([accountId, accountEmail, accountPassword, accountCity]); // printing the values in tabular format 