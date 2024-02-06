var num = 20

if(num % 2 == 0){
    console.log("Even number")
}

console.log("after if")


var num = 21

if(num % 2 == 0){
    console.log("Even")
}else{
    console.log("odd ")
}

// ternary operator
var num1 = 20
num1 % 2 == 0 ? console.log("Even number ") : console.log("odd number")

13 % 2 == 0 ? console.log("Even number ") : console.log("odd number")


/// nested conditionals


var a = 0

if (a>=0){
    if (a>5){
        console.log("a is greater than 0 and 5")
    }else{
        console.log("a is greater than 0 but less than 5")
    }
}

else{
    console.log("a is less than 0")
}

a >= 0 ? a > 5 ? console.log('a is greater than 0 and 5') : console.log("a is greater than 0 but less than 5") :  console.log("a is less than 0")



/// Switch

var fruit = "Banana"

switch(fruit){
    case "Apple":
        console.log("It's an apple")
        break
    case "Mango":
        console.log("It's a mango")
        break

    default :
        console.log("Not a valid fruit")
}

// Loops


