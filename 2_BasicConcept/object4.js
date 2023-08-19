//object destructure

const course = 
{
    coursename : "JAVASCRIPT" , 
    price : "999" , 
    courseInstructor  : "surya" 
}

const {courseInstructor : istructor} = course
console.log(istructor);