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
// const myName = new String('Satya sanatan bastia')
// console.log(myName)
// console.log(myName[4])
// console.log(myName.__proto__)
// console.log(myName.length)
// console.log(myName.toLocaleLowerCase())//convert all in lower Case
// console.log(myName.toLocaleUpperCase())//convert all in Upper Case
// console.log(myName.charAt(3))//provide Which charecter present in Pass Nuber Location
// console.log(myName.indexOf('a'))//provide details of passing charecter present in which location

// const newString = myName.substring(0,5)
// console.log(newString)// substring

// const cfc =myName.slice(2, 6)
// console.log(cfc)// use slice of main string and store it in new string

// const bff = "          satya     "
// console.log(bff)
// console.log(bff.trim())// remove the string of string

// const nmn =" satya sanatan sonu"
// console.log(nmn.includes('sonu'))// check the passing string is available or not in main string
// console.log(nmn.split('-',1))//split is use to there separator(special delimiter) to check the entire string and devide them in substring if not found any separtor then print entire string in array format


//Number and Maths in Javascript 
// const score = 2000
// console.log (score)//normal declaration of number 

// const balance = new Number(1475)
// console.log(balance) 
// console.log(balance.toString()) //to string convert entire data type to string format

// console.log(balance.toString().length)// length is use how many charecter present in string

// console.log(balance.toFixed(1)); // toFixed & it is accept under there parenthesis called argument number is used to format a number to a fixed number of decimal places. It returns the number as a string, rounded to the specified number of decimals.

// //it also work like this
// let num = 123.456;

// // Round to 2 decimal places
// console.log(num.toFixed(2)); // "123.46"

// // Round to 0 decimal places  
// console.log(num.toFixed(0)); // "123"


//math Object
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(9.5))
// console.log(Math.ceil(3.8))
// console.log(Math.floor(4.9))
// console.log(Math.random()*10)
// Function to generate a random OTP of a given length
// function generateOTP(length) {
//     const characters = '0123456789'; // You can add letters if needed (e.g., 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
//     let otp = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         otp += characters[randomIndex];
//     }

//     return otp;
// }

// // Example usage
// const otpLength = 6; // Set the desired length of the OTP
// const otp = generateOTP(otpLength);
// console.log(`Your OTP is: ${otp}`);


//Date in JS

// let myDate = new Date()
// console.log(myDate);
// console.log(`toString--- ${myDate.toString()}`);
// console.log(`toISOString--- ${myDate.toISOString()}`);
// console.log(`toJSON--- ${myDate.toJSON()}`);
// console.log(`toLocaleDateString--- ${myDate.toLocaleDateString()}`);
// console.log(`toDateString--- ${myDate.toDateString()}`);


