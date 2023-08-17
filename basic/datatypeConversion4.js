let mark = undefined

console.log(mark); //undefined 
console.log(typeof mark); // undefined 
console.log(typeof(mark)); //undefined 

let numberInValue = Number(mark); // here undefined converted into NAN (Not A Number)

console.log(numberInValue); // NAN
console.log(typeof numberInValue) // number
