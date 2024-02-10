// Higher order functions are those in which we pass function  or return function as a parameter
function operation(operatorFn , a , b){
    return operatorFn(a,b)
}

function add(a,b){
    return a+b
}

let result = operation(add , 5 , 6)

console.log(result)


function getGreetMethod(){
    return function(){
        console.log("Hello Students")
    }
}

let greetFn = getGreetMethod()
console.log(typeof greetFn)

greetFn()