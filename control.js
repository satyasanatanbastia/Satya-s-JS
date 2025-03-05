//By default JavaScript ka flow Top to Bottom hota hai.
//basic syntax
// if (condition){
//     console.log("hello")
//     //here is accessable when condtion is true


// let age = 20;

// if (age >= 18) {
//   console.log("You can vote");
// }
 

// ==	:Loose Equality	:Sirf Value check karega :Type Conversion (Type Coercion) :5 == "5"	✅ True

// ===	:Strict Equality	:Value + Type dono check karega	:No Type Conversion :5 === "5"	❌ False

// console.log(NaN == NaN);  // False
// console.log(NaN === NaN); // False
//jS mai NaN kisi bhi cheez ke barabar nahi hota (Even NaN khud ke barabar nahi hota).

// 🔑 Best Practice 💪
// ✔ Hamesha === ka use karo
// ✔ == ko avoid karo kyunki ye bug create karta hai



//with scope
// let age = 20;

// if (age >= 18) {
//   console.log("You can Vote");
//   console.log("Welcome to Voting System");
// }
// console.log("Outside Block");


// //without scope, implicit scope
// let x = 10;

// if (x > 5)
//   console.log("A");
//   console.log("B");

//best practice write cide use scope

// else-if
const balance=4800
if (balance>=5000){
    console.log(`you get 10% Discount on ${balance}`);
}else if(balance>=3000 && balance<=5000) {
    console.log(`you get 7% Discount on ${balance}`);
}else {
    console.log(`you get 3% Discount on ${balance}`);
}