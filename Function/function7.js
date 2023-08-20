//professional ways

function logIn(username)
{
    if(!username) //another way 
    {
        console.log("please enter valid username");
        return
    }
    return `${username} just logged in`
}
console.log(logIn());