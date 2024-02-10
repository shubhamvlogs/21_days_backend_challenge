function greet(name , callback){
    const greeting = "Hello"  + name 
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("Vishwa",displayGreeting)



// callback hell => pyramid of doom


getUser(function(user) {
    getPosts(user.id, function(post) {
        displayUserInfoandPost(user, post, function() {
            console.log("User Info and posts successfully displayed");
        });
    });
});

