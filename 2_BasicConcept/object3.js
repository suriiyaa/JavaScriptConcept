//looping 

const user =
{
    id : "1" , 
    fname : "surya" , 
    lname : "prakash" , 
    email : "surya@demo.com" , 
    password : "s@123" , 
    isLoggedin  : false
}

console.log(user); //get all data with key and value in object format
console.log(Object.keys(user)); // get the key from data base in array format
console.log(Object.values(user)); // get the value from database in array format
console.log(Object.entries(user)); // get the all key and value in array format

console.log(user.hasOwnProperty("isLoggedin"));