//object can declared as an 2 way, 1. using literals,  2. Using Constructor(object.create)

//object literals:--
//object are consist of in  key value pair
//js treted key as a string
// const mySymb=Symbol("sonu1")
// const newUser = {
//     name: "satya",
//     age:22,
//     email:"satya.b@bourntec.com",
//     isLoggedin : false,
//     lastLogin: ["monday", "saturday"],
//     [mySymb]:"my key1"
// }

//acess the object in js

// console.log(newUser.email)
// console.log(newUser["email"])
// console.log(newUser[mySymb])// Accessing the symbol 

//freeze property in js
//The Object.freeze() method prevents modifications to an object. This means:
// No new properties can be added.
// Existing properties cannot be modified.
// Existing properties cannot be deleted.

// console.log(newUser)
// newUser.age= 23
// console.log(newUser)
// Object.freeze(newUser)
// newUser.age=34
// console.log(newUser.age)


//function in object
//in object function treted as a normal variable



// const userNew = {
//     name:"satya Sanatan",
//     age:22,
//     xtra:function(){
//         const x=333+58647920
//         console.log(x)
//     }
// }

// console.log(userNew.xtra())// here object under function is called method 

//function using this keyword
//The this keyword refers to the object that owns the function.
//It helps us access other properties inside the same object.
// const userNew11 = {
//         name:"satya Sanatan",
//         age:22,
//         ytra: function(){
//             console.log(`my name is ${this.name} and my age is ${this.age}`)
//         }
//     }
// userNew11.ytra()// function calling

//**************object literal(constructor)***********

// const new_user = new Object()
// const new_user11 ={}
// console.log(new_user, typeof(new_user))
// console.log(new_user11, typeof(new_user))

// const gre={}
// gre.age=22
// gre.name="satya"
// gre.isLoggedin = false
// console.log(gre)


// const drd={
//     age:32,
//     email:"satya@brntec.com",
//     fullname:{
//         user_fullname:{
//             firstName:"Satya Sanatan",
//             lastName:"Bastia"
//         }
//     }
// }
// console.log(drd)



// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// const obj3 = {obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3)

// const obj3 ={...obj1,...obj2}
// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }




