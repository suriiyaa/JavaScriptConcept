function one()
{
    const username = "surya"

    function two()
    {
        const id = 101
        console.log(username);
    }
    two()
    //console.log(id); // here we cant access the id from the inner function 
    //but we can access the variable of outer funtion
    //its all about the scope of the nasted function 
}
one()