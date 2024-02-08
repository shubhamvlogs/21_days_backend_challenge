const user = {
    name : 'Shubham',
    age  : 19 ,
    city : "Jaipur" 


}
console.log(user)

//accessing the key values pairs
console.log(user.name)
console.log(user['name'])



// Adding data to the objects

user.country = "India"
user['continent'] = "Asia"

console.log(user)

// Deleting keys and object itself

delete user.country

console.log(user)


delete user['continent']

console.log(user)


let person = {
    name : "Virat",
    age : 30,
    address : {
        city  : "Jaipur",
        state : "Rajasthan",
        country : "India"
    }
}

for (let key in person){
    console.log(key)
}

for (let key in person){
    console.log(key , "=>" , person[key])
}


console.log(Object.keys(person))
console.log(Object.values(person))

// get both keys and values

console.log(Object.entries(person))

// cloning an object using assign

const new_person = Object.assign({}, person)
console.log(new_person)


const Virat_Kohli = Object.assign({},person ,{role : "Data Scientist" , age : 35})

console.log(Virat_Kohli)


// const  Shreyas_Iyer = Object.assign({},person , {role : 'Data Analyst'} , age  : 34)
// console.log(Shreyas_Iyer)