// function chai(){
//     let name="krishna"
//     console.log(this.name);
// }
// chai();


// Arrow function version
// The arrow function does not have its own 'this', it refers to the outer context.
// This will log 'undefined' because 'this' in arrow functions does not refer to the function itself.
// Instead, it refers to the global context or the enclosing scope.

// const chai = () => {
//     let name = "krishna";
//     console.log(this.name);
// }
// console.log(chai); // Logs the function definition
// Calling the arrow function will not log anything related to 'this' since it does not have its own context.
// Output:undefined 

// chai(); // Logs 'undefined' because 'this.name' is not defined in the global context.  
// Output: undefined

(() =>{
    console.log("Hello, this is an arrow function!");
}) ();
