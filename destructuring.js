// 


// Destructuring in an object

const per = {
    age : 19,
    name : "Shubham",
    city  : "Jaipur",
    address : {
        city : "Jaipur",
        state : "Rajasthan"
    }
}

console.log(per)

const { age ,  name , address  :{city , state}} = per

console.log(name)
console.log(age)
console.log(city)