let a= 22
const b=33
var c= 44

//let is block lavel scope
//var is global lavel scope
// Scope
// var → Function-scoped (accessible throughout the function in which it is declared).
// let → Block-scoped (accessible only within the block {} where it is declared).
// const → Block-scoped (same as let).




// if (true) {
//     let a = 3;  // Block-scoped
//     const b = 4; // Block-scoped
//     var c = 6;   // Function-scoped (not block-scoped)
// }

// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError
// console.log(c); // ✅ Works! Logs: 6
// Mechanism Behind This (Variable Scope in JavaScript)
// **********Block Scope (let and const)

// let and const are block-scoped.

// A block in JavaScript is anything inside {} (curly braces).

// This means that a and b only exist inside the if block and cannot be accessed outside.

// When console.log(a) and console.log(b) are called outside the block, JavaScript throws a ReferenceError because a and b are not defined in that scope.

// *********Function Scope (var)

// var is function-scoped, meaning it does not respect block {} scope.
// Even though c is declared inside the if block, it gets "hoisted" to the top of the function (or global scope if it's not inside a function).
// This is why console.log(c) works and prints 6.



// function one(){
//     const username = "satya"
//     function two(){
//         const middle = "sanatan"
//         console.log(username)
//     }
//     console.log(middle)
//     two()
// }
// one()
//The error occurs because the middle variable is declared inside the two() function, making it local to that function. It is not accessible from the one() function, which is why the console.log(middle) statement throws a reference error.


// function one(){
//     const username = "satya";
//     function two(){
//         const middle = "sanatan";
//         console.log(username); // 'username' is accessible here due to closure.
//         console.log(middle); // 'middle' is accessible here because it's declared within this function.
//     }
//     two(); // Call the inner function to execute its code.
//     // console.log(middle); // This line is removed because 'middle' is not accessible outside the 'two()' function.
// }
// one();


