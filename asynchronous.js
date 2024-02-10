console.log("hello from first line")


setTimeout(() =>
    {
        console.log("It will execute after 3 milli seconds ")
    },3000
)

console.log("hello from last line")


// In asynchronous programming , the code will not wait for other part to execute it will move to directly to next  step 

// it is working on the principle of event loop concept
