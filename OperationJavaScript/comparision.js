console.log(1<2)
console.log(null > 0); // false 
console.log(null == 0); //false 
console.log(null >=0); // true

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId)
