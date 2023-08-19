//array declaration 

const myArr1 = [1, 2,3,4,5]

const myArr2 = ["surya" , "prakash", ]

const myArry3 = new Array(1,2,3,4,5)

const myArry4 = new Array("surya", "prakash" , "Nayak" )

console.log(myArr1);
console.log(myArr2);
console.log(myArry3);
console.log(myArry4);

myArr1.push(6);
myArr1.push(7); // for add the value in array 
console.log(myArr1);
myArr1.pop(); //remove the last value from the array
console.log(myArr1); 
myArr1.shift()// remove the fast element from the array
console.log(myArr1);


const newArray = myArr1.join()

console.log(myArr1);
console.log(newArray);
console.log(typeof myArr1); //object
console.log(typeof newArray); // string

//slice and splice

const array1 = [1,2,3,4,5]

console.log("A" , array1);

const sliceArray = array1.slice(2 ,4)

console.log(sliceArray);

const spliceArray = array1.splice(2, 4)

console.log(spliceArray);

