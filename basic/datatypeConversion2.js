//datatype conversion and confusion

let mark = "430abc"

console.log(typeof mark);  //string
console.log(typeof(mark)); //string

//if we want to convert into Number

let valueInNumber = Number(mark);
console.log(valueInNumber) //NAN : NOT A NUMBER
console.log(typeof valueInNumber); // Number
