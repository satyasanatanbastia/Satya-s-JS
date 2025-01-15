//Datatype conversion

// let age =33
// console.log(typeof age)//number
// console.log(typeof(age))//number

// let ab= "23"
// let c = Number(ab)
// console.log(typeof(c))//number

// let a= "23abc"
// let valueInNumber = Number(a)
// console.log(typeof(valueInNumber))//number
// console.log(valueInNumber)//NaN


// let isLoggedIn = ""
// console.log(isLoggedIn)
// let a1 = Boolean(isLoggedIn)
// console.log(a1)//false

// let isLoggedIn = "0"
// console.log(isLoggedIn)
// let a1 = Boolean(isLoggedIn)
// console.log(a1)//true

// let isLoggedIn = "1"
// console.log(isLoggedIn)
// let a1 = Boolean(isLoggedIn)
// console.log(a1)//true

// ****************operations***************


// console.log("1"+2)//12
// console.log(1+'2')//12
// console.log("1"+"2")//12
// console.log("1"+2 +3)//123
// console.log(1 +2 +'3')//33


// let x = 5;
// console.log(x++); // ?5
// console.log(x);   // ?6


// let y = 25;
// console.log(++y); // ?26
// console.log(y);   // ?26


// let z = 15;
// console.log(z--); // ?15
// console.log(z);   // ?14


// let m = 8;
// console.log("m",--m); // ?7
// console.log("m",m);   // ?7


// let x = 3;
// console.log(x++ + ++x); // ?8

// let x = 5;
// let y = x++ + x++ + ++x;
// console.log(x, y); // ?8 19


//stack memory program
// let a=33
// let b=a
// console.log(a)
// console.log(b)
//  a=43
// console.log(a)
// console.log(b)
// console.log(a)


//heap memory program
// let abc={
//     email:"satya@s",
//     name:"satyab"
// }

// console.log(abc)
// let bbc =abc
// bbc.name="satya sanatan bastia"
// console.log(abc)
// console.log(bbc)




// Strings in Javascript

const name="satya"
const age=43
console.log(`my name is ${name} and my age is ${age}`)