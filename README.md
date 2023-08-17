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
