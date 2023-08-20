function login(username)
{
    if(username === undefined)
    {
        console.log("please enter valid username ");
        return
    }
    return `${username} just logged in` 
    
    // here we want if the username are pass in argument
    //then this line return `${username} just logged in` can not execute 
    //so just write return keyword in if condition as last statement

}
//console.log(login("surya")) // here we pass the argument
//if we are not passing the argument
console.log(login()); // here we are not pass the arguments so its return "udefined" 
// if we want to check the username pass or not then we are use if else condition