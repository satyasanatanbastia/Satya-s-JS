//function declaration

// function sayMyName()//under the parenthesis is called parameter in function declaration time {
//     console.,log("Jay Jay Sri Radhe")
// }
// sayMyName()//in function calling time under the parenthesis is called argument //function call/reference/execution

// 1. What is a Function?
// A function in JavaScript is a reusable block of code that performs a specific task. Functions help to structure code, avoid repetition, and improve readability.

// 2. Function Declaration
// A function can be defined using the function keyword.

// 3. Function Parameters & Arguments
// Parameters are placeholders in the function definition.
// Arguments are actual values passed to the function when called.

// function adding(a,b){
//     return a+b
// }
// console.log(adding(2222,7876))

//rest operator in js
// Rest Operator (...) in JavaScript
// The rest operator (...) in JavaScript is used to collect multiple elements into an array or object. It is useful in:

// Function parameters (handling multiple arguments)
// Array destructuring
// Object destructuring

// function sumAll(... num1){
//     return num1
// }
// console.log(sumAll(200,555,75475,1248,3000))


// function sumAll(val1,val2, ... num1){
//     return num1
// }
// console.log(sumAll(200,555,75475,1248,3000))//here val1 & val2 are the value of index 0 & 1 rest are assign to num1 


//********* pass argument as object**********

// const sumThis ={
//     username:"satya",
//     age:22,
//     b_grp:"O+VE"
// }

// function trackObject (anyobject){
//     console.log(`User Name is ${anyobject.username} and blode Group is ${anyobject.b_grp}`)
// }

// trackObject(sumThis)// here function call time pass argument as a object

//********* pass argument as array**********/

// const testArray=[200,300,400,500,"satya"]
// function checkedArray(getarray){
//     console.log(getarray)
// }
// checkedArray(testArray)


// ************arrow function***********
// this keyword
//JavaScript mai this ek special keyword hai, jo current object ko refer karta hai jisme wo function call ho raha hai. 

// const seru ={
//     username: "satya",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to my website`)
//     }

// }
// seru.welcomeMessage()
// HERE THIS IS USE TO access the object from function


//browser have global objectis called window object

// const hello = function(){
//     let username="satya",
//     age =22
//     console.log(this.username)//undefined
// }
// hello()


// ------this syntax-----
// const hello = () => {
//     let username="satya",
//     age =22
//     console.log(this)//{}
// }
// hello()//this syntax


// const addtwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addtwo(55,44));

// ----implicit return------

// const addthree = (no1, no2, no3) => (no1+no2+no3)
// console.log(addthree(55,7,22))
//here return is basically use under the { } curly brases , in implicit return syntax no need to use retun and passed parameter are packed with () squere braket
//In arrow functions, if you use parentheses () instead of curly braces {} after =>, the function will automatically return the value.

// const addew = (no1,no2)=> ({username:"hello"})
// console.log(addew(2,2))//If you want to return an object directly from an arrow function, you must wrap the object in parentheses ().\

// ------------------------------------------------------

// What is IIFE?
// 👉 IIFE stands for Immediately Invoked Function Expression.

// It is a function that executes immediately after its definition, without needing to call it manually.

// syntax:-
// named iife
// (function hello() {
//     console.log("Hello Satya");
// })();


//unnamed iife

// ( ()=> {
//     console.log(`jay sri ram`)
// })()
// When you wrap a function inside (), JavaScript treats it as a Function Expression instead of a Function Declaration.


// ( (name)=> {
//     console.log(`jay sri ram ${name}`)
// })("satya")//unnamed iife pass parameter 


//***********if u use 2 iife at a time add both  end with semicolumn (;) other wise  iife not work