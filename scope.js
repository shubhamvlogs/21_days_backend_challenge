// Global scope

// var name = "Shubham Sharma"

// console.log(name)


// function func(){
//     console.log(name)
// }

// func()


// Local scope variable or function scope variable

function func(){
    var name = "local scope"
    console.log(name)
}

func()
// console.log(name)



// block scope

// {
//     var x = 20
//     console.log(x)
// }

// console.log(x)

// let keyword is used for writing block scope
{
    let x = 20
    console.log(x)
}

console.log(x)