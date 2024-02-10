// use forEach method in place of for loop 
players = ["Sachin", "Rohit", "Virat", "Shubhman", "K.L. Rahul"];

players.forEach((player) => console.log(player));


// map method => create new transformed array

arr = [1,2,3,4,5,6]

cub_arr = arr.map(num => num**3)
console.log(cub_arr)
console.log(arr)

// filter function


let arr1 = [1,2,3,4,5,6,7,8,9,10]

let even_arr = arr1.filter((num) => num%2 == 0)
console.log(even_arr)

// reduce method

const  sum = [1,2,3,4,5,6,7,8,9,10].reduce((curr , next )=> curr + next)
console.log(sum)
