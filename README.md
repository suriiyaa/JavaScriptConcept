# JavaScriptConcept
Basic Concept of JavaScrpt
/* 
Semicolun is optional in javascript 
*/

/* 
dataTypes available in javaScript : 
var
let 
const
default
*/

/* 
prefer not use Var datatype because of issue in block scope and function scope
*/

/* 
if we are not declare the variable just intilaize the variable and
we print that varibale then output will show "undefined"
*/

/*
if we want to print the above detaile individually 
then we have to write the variable name within the console.log() parameter.
*/

5136
suriya
suriya@example.com
surya@123
Automation TE
undefined

/*
if we want to print the above detaile in table format  
then we have to write the variable name within the console.table() parameter.
*/

┌─────────┬──────────────────────┐
│ (index) │        Values        │
├─────────┼──────────────────────┤
│    0    │         5136         │
│    1    │       'suriya'       │
│    2    │ 'suriya@example.com' │
│    3    │     'surya@123'      │
│    4    │   'Automation TE'    │
│    5    │      undefined       │
└─────────┴──────────────────────┘

/*
if we declare the varibale as const once then 
later want to change the variable value then its shows error msg 
i'e : " TypeError: Assignment to constant variable. "
*/

/* if we are not intialize the variable then its show error 
i'e : " undefined "

Datatypes and ECMA standards | Javascript

let name = "surya"
let email = "surya@example.com"
let password = 12345
let isLoggedIn = true 
let server = null 
let state

console.log(typeof "surya")
console.log(typeof "surya@example.com")
console.log(typeof 12345)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

output : 
string
string
number
boolean
object
undefined

datatype :
number 
bigint
string
boolean
null
undefined 
symbol
object

Datatype conversion confusion | Javascript

scenario 1 :

//datatype conversion and confusion
let mark = 430 
console.log(typeof mark); //number
console.log(typeof(mark)); //number

scenario 2 :

//datatype conversion and confusion

let mark = "430"

console.log(typeof mark); string
console.log(typeof(mark)); string 
//if we want to convert into Number
let valueInNumber = Number(mark); 
console.log(valueInNumber) //NAN : Not A Number
console.log(typeof valueInNumber); number

scenario 3 :

//datatype conversion and confusion

let mark = "430abc"

console.log(typeof mark);  //string
console.log(typeof(mark)); //string
//if we want to convert into Number
let valueInNumber = Number(mark);
console.log(valueInNumber) //NAN : NOT A NUMBER
console.log(typeof valueInNumber); // Number

Scenario 4 :

let mark = null

console.log(mark); //null
console.log(typeof mark); // object 
console.log(typeof(mark)); //object
let numberInValue = Number(mark); // here object converted into 0 
console.log(numberInValue); // here object value will 0
console.log(typeof numberInValue) // here 0 is a number

scenario 5 :

let mark = undefined

console.log(mark); //undefined 
console.log(typeof mark); // undefined 
console.log(typeof(mark)); //undefined 
let numberInValue = Number(mark); // here undefined converted into NAN (Not A Number)
console.log(numberInValue); // NAN
console.log(typeof numberInValue) // number

scenario 6 :

let mark = true

console.log(mark); //true
console.log(typeof mark); //boolean
console.log(typeof(mark)); //boolean
let numberInValue = Number(mark); // here true converted into 1 
console.log(numberInValue); // 1
console.log(typeof numberInValue) // number

scenario 7 :

let isLoggedIn = 1 ;

console.log(isLoggedIn); // 1
console.log(typeof isLoggedIn); // number

let valueInBoolean = Boolean(isLoggedIn)

console.log(valueInBoolean); //true
console.log(typeof valueInBoolean); //boolean

scenario 8 :

let isLoggedIn = "value" ;

console.log(isLoggedIn); //value
console.log(typeof isLoggedIn); // string

let valueInBoolean = Boolean(isLoggedIn)

console.log(valueInBoolean); //true
console.log(typeof valueInBoolean); //boolean

scenario 9 :

let isLoggedIn = "" ;

console.log(isLoggedIn); //blank space
console.log(typeof isLoggedIn); // string

let valueInBoolean = Boolean(isLoggedIn)

console.log(valueInBoolean); //false
console.log(typeof valueInBoolean); //boolean

note :
in boolean data type

1 = true
0 = false 
"" = false
"suriya" = true

scenario 10 :

let someNumber = 360

console.log(someNumber); //360
console.log(typeof someNumber); //number

let valueInString = String(someNumber);

console.log(valueInString); // 360 will come and here 360 is not a number is a string

//if we want to check the datatype of 360

console.log(typeof valueInString); //string










