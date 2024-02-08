// Define a function
// function function_name(){



function hellostudents(){
    console.log('I am learning functions in javascript')

}


hellostudents()

function sum(a,b){
    return a+b;
}

console.log(sum(5,6))

// Default arguments 

function sum(a,b=2){
    return a+b;
}

console.log(sum(4))

// aruguments object magical weapon in javascript

function sum(){
    console.log(arguments)

}

sum(1,2,3,3,4,5,6,6,7)