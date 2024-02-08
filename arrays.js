// // // It is way of storing data based on ordered --> array 

// // arr  = [1,2,3]
// // console.log(typeof arr)

// // arr1 =  new Array()

// // console.log(typeof arr1)
// // console.log(arr1)

// arr = [1,2,3,4,9,8,7,19,21,29,20]


// // javascript is a peaceful langauge it will not even give us error even if will pass out of index number 

// console.log(arr[7])
// console.log(arr[20])
// console.log(arr[-1])


// // arrays are mutable and hence we can modify its value so far

// arr[1] = 200 
// console.log(arr)

// // insert items in a array


arr1 = [5,7,1,6,9,8,16]

arr1.push(100)
arr1.push(101,102,103,104)
console.log(arr1)
console.log(arr1)

// push method allows you to add multiple elements at the end

// unshift method for adding element at the starting position


arr1.unshift(100)
arr1.unshift(100,200,300,400)
console.log(arr1)

// removing elements

// use pop method it removes element from last place

arr2 = [1,2,3,4,5,6,7,8]

arr2.pop()

console.log(arr2)
 
// use shift method for removing element from starting place 
arr3 = [11,2,3,4,5,6,7,8]
console.log(arr3.shift())
console.log(arr3)

// for merging two array elements use concat method

let a1 = [1,2,3]
let a2 = [5,6]

let result = a1.concat(a2)
console.log(result)

//size of the array
console.log(a1.length)

// convert array into strings

chr_arr = ['S','H','U','B','H','A','M','','S','H','A','R','M','A']

//join 

console.log(chr_arr.join())
console.log(chr_arr.join(" "))
console.log(chr_arr.join("$"))

console.log(typeof chr_arr.toString())


// Slicing of the array 
 
let  nums = [1,2,3,4,5,6,7,8,9,10]

console.log(nums.slice(2))
console.log(nums.slice(2,6))
console.log(nums.slice(5,-1))
console.log(nums.slice(-9,-2))
console.log(nums.slice(2,-1))

console.log(nums)

// splicing which modifies the given array

let num = [1,2,3,4,5,6,7,8,9,10]
let removed  = num.splice(2,2)
console.log(removed)
console.log(num)

// splice removes the array elements like this first place denotes starting and second place denotes how many number we have to remove from a array


let numbers =  [1,2,3,4,5,6]
let remove_numbers = numbers.splice(2,3,100,200,300,400)

console.log(numbers)
console.log(remove_numbers)

// reverse a given array

let nums2 = [5,6,7,8,9,0]

nums2.reverse()


console.log(nums2)


let nums3 = [4,1,5,6,7,8,9]
console.log(nums3.indexOf(24))


// sorting the array


// // for properly sorting the array we will use conditions as a parameter in the sort method
// let my_arr = [50,40,6,33,24,1]

// my_arr.sort((a,b) => a-b)
// console.log(my_arr)


let my_arr1 = [50,40,6,33,24,1]

my_arr1.sort((a,b) => b-a)
console.log(my_arr1)