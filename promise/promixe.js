
//  new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "john", age: 30});
//     }, 1000);
// }).then(function(data) {
//     console.log("promise2 resolved with data:", data);
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("asyn2 started");
//         resolve();
//     }, 2000);
// }).then(function() {
//     console.log("asyn2 resolved");
// })

// const promiseFive = new Promise(function(resolve, reject) {    
//     setTimeout(function() {
//         let error=true
//         if(!error) {
//             resolve({username: "john", age: 30});
//         }   else {
//             reject("Error: Something went wrong!");
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//    try {
//     const response= await promiseFive
//     console.log( response);
//    } catch (error) {
//         console.log("Error occurred:", error);
//     }
    
//    }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.error("Error fetching users:", error);
        
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
    .catch((error)=>{console.log(error)})