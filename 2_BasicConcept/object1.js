//singleton object

const appUser = new Object() // it is singleton object , one way of object declaration

console.log(appUser); //  it will show empty object i'e {}

const appUser1 = {} //it is a object literal , another way of object declaration

console.log(appUser1); // it will also show empty object i'e {}

appUser1.id = "5120"
appUser1.name = "surya"
appUser1.email = "surya@example.com"
appUser1.password = "12345"
appUser1.isloggedIn = false 

console.log(appUser1);

const user = 

{
    email : "surya@demo.com",

    fullname : 
    {
        userfullname : 
        {
            firstname : "surya",
            lastname : "prakash"
         }
    }
}

console.log(user.fullname.userfullname.firstname);
console.log(user.fullname.userfullname);

let obj1 = {firstname : "surya" ,  lastname : "prakash" }
let obj2 = {city : "Bhubaneswar" , state : "odisha"}

let obj3 = Object.assign({} , obj1 , obj2) // here we want to merge the value of two object
console.log(obj3);

//or else 

obj3 = { ...obj1 , ...obj2}

console.log(obj3);

