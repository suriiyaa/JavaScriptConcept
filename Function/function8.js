function logIn(username = "demo")
{
    if(!username)
    {
        console.log("please enter valid username");
        return
    }
    return `${username} just logged in`
}
console.log(logIn("surya")); //if we are pass the value in arguments then its over write