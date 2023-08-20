function logIn(username)
{
    if(username === undefined)
    {
        console.log("please enter valid username");
        return
    }
    return `${username} just logged in`
}
console.log(logIn());