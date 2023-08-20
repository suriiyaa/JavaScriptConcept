//not mandetory to declare the object separatly 
//we can pass directly in the argument of function 
//at the function call

function logIn(objectType)
{
    console.log(`My name is ${objectType.username} and my Id is ${objectType.id}`);
}

logIn({username : "surya" , id : 101})