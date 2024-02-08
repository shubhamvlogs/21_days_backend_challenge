// String

let name = "Shubham"

let city = "Jaipur"

console.log(name , city)
console.log(typeof name)
console.log(typeof city)

// Accessing characters of a string 
console.log(name[0])
console.log(city[0])
console.log(city[12])

name[2]="M"
console.log(name)

// methods in string 
// length of the string
console.log(name.length)
console.log(city.length)


let first_name = "Shubham"
let last_name = "Sharma"

console.log(first_name,last_name)

// concat for adding two variables

let full_name = first_name.concat(last_name)

console.log(first_name + last_name)

// convert that into upper case 

console.log(full_name.toUpperCase())

/// character at any index str[i]

console.log(first_name.charAt(4))

// slicing

console.log(full_name)
console.log(full_name.slice(5))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))
console.log(full_name.slice(-8,-1))

// to find index of any character at random position

console.log(full_name.indexOf('h'))
console.log(full_name.indexOf('S'))
console.log(full_name.indexOf('m'))

console.log(full_name.indexOf('M')) // IT will give -1 indx if it is not present

// for trimming space in a word
let word = " Shubham Sharma      "
console.log(word)
console.log(word.trim())

// split 

name1 = "Shubham Kumar Sharma"

console.log(name1.split(" "))

console.log(name1.split("")) // pass the seperator with your requirement as here we have seperated it without any space so it will give us A LIST OF CHARACTERS 







