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

// const name="satya"
// const age=43
// console.log(`my name is ${name} and my age is ${age}`)

// another way to declare String
const myName = new String('Satya sanatan bastia')
console.log(myName)
console.log(myName[4])
console.log(myName.__proto__)
console.log(myName.length)
console.log(myName.toLocaleLowerCase())//convert all in lower Case
console.log(myName.toLocaleUpperCase())//convert all in Upper Case
console.log(myName.charAt(3))//provide Which charecter present in Pass Nuber Location
console.log(myName.indexOf('a'))//provide details of passing charecter present in which location

const newString = myName.substring(0,5)
console.log(newString)// substring

const cfc =myName.slice(2, 6)
console.log(cfc)// use slice of main string and store it in new string

const bff = "          satya     "
console.log(bff)
console.log(bff.trim())// remove the string of string

const nmn =" satya sanatan sonu"
console.log(nmn.includes('sonu'))// check the passing string is available or not in main string
console.log(nmn.split('-',1))//split is use to there separator(special delimiter) to check the entire string and devide them in substring if not found any separtor then print entire string in array format





