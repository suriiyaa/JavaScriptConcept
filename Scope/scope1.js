function scope()
{
    let a = 10
    const b = 20 
    var c = 30 
    console.log(a);
    console.log(b);
    console.log(c);
}
scope()
//if we print a, b,c outside of the function its show's an error undefined