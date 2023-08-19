//how to declare the object 
//object literal
const objRef = 
{
    "full Name" : "Surya Prakash",
    "lastname" : "Nayak" , 
    name : "surya", 
    age : 18 ,
    email : "surya@example.com",
    password : "Surya@123"
}
console.log(objRef.name);
console.log(objRef["full Name"]);
console.log(objRef["lastname"]);
console.log(objRef);
objRef.email = "surya@google.com"
console.log(objRef);
//Object.freeze(objRef)
objRef.email = "surya@microsoft.com"
console.log(objRef);

objRef.greetings = 
function()
{
    console.log(`hello JS user this is ${this["full Name"]} , welcome to our coding`);
}

console.log(objRef.greetings());