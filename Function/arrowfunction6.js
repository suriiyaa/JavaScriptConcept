const add = () => 
{
    const username = "surya"
    const id =101 
    console.log(username + " " + id);
}
add()

//one way of addition of two no
const addTwoNum = (num1 , num2) =>
{
    console.log(num1 + num2);
}
addTwoNum(5,5)

//another way of addition of two no

const addTwoNum1 = (num1 , num2) =>
{
    return num1 + num2
}
console.log(addTwoNum1(6,6));

//implicit return of addition of two no

const add1 = (num1 , num2) => num1 + num2

console.log(add1(7 , 7));

//or else

const add2 = (num1 , num2) => 
(num1 + num2)

console.log(add2(8 , 8));

//here we return the object if we want to return the object then

const demo2 = (num1 , num2) =>

({username : "surya"})


console.log(demo2(5 , 5));


