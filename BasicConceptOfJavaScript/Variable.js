const empId = 5136 ;
let empName = "suriya" ;
let empEmail = "suriya@example.com";
let empPassword = "surya@123" ;
empdesignation = "Automation TE" ; 
let empContact; 


/*
if we want to print the above detaile individually 
then we have to write the variable name within the console.log() parameter.
*/
console.log(empId);
console.log(empName);
console.log(empEmail);
console.log(empPassword);
console.log(empdesignation);
console.log(empContact);

/*
if we want to print the above detaile in table format  
then we have to write the variable name within the console.table() parameter.
*/

console.table([empId , empName , empEmail , empPassword , empdesignation , empContact]) ; 


