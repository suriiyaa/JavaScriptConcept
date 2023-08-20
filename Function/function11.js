//simple way how object are passing in a function and how to use it 

//first declare the object

const user =
{
    name : "surya", 
    id : 101
}

function objectHandle(anyObject)
{
    //console.log(anyObject);
    console.log(`username is ${anyObject.name} and id is ${anyObject.id}`);    
}

objectHandle(user)