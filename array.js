//************ARRAY IN JS**********
// normal creation of an array
// const myArray =[1,'satya', true , 0, 68.08]
// console.log(typeof(myArray))
// console.log(`this is my first array ${myArray}`)

//create array using array object
// const vdp= new Array('mom', 44, 87, "gcp")
// console.log(vdp)
// console.log(typeof(vdp))
// //accessing an array
// console.log(vdp[2])// index start from 0 ,1st item is 0th index

//array methods

//const nnnt = [1,2,4,78,6,1,6,8]
// nnnt.push(33)
// console.log(nnnt)
// nnnt.pop()
// console.log(nnnt)

// push():
// Adds an element to the end of the array.
// Directly modifies the original array (nnnt).
// Returns the new length of the array (but this return value is not used in your code).


// pop():
// Removes the last element from the array.
// Directly modifies the original array (nnnt).
// Returns the removed element (but again, this return value is not used in your code).
//nnnt.unshift("ram")//this is not best practice to do like this rare cases it is used . if we add any items in 0 index all items index is changed it take more time taking and pressure for large file

//nnnt.shift("ram") //its removes 1st elemet like pop

//console.log(nnnt.includes(121))//Checks if an array contains a specific value.

//console.log(nnnt.indexOf(6))// passing the value to check present  in which index and provide the index number, if the passing value is not found then print -1

// const fruits = ["apple", "banana", "cherry"];
// const vcv = fruits.join()
// console.log(fruits)
// console.log(vcv)
// console.log(typeof(vcv))


//slice, splice
// const fruits = ["apple", "banana", "cherry", 111, 4343, true, false];
// const fruits2 = fruits.slice(1,3)
// console.log(fruits)
// console.log(fruits2)//[ 'banana', 'cherry' ] similar to slicing in python

// const fruits3 = fruits.splice(1,3)
// console.log(fruits3)

//Use slice() when you want to copy or extract part of an array without changing the original array.
//Use splice() when you need to add, remove, or replace elements and modify the array in place.

// const fruits1 = ["apple", "banana", "cherry", 111, 4343, true, false];
// const fruitss = ["apple", "banana", "cherry", 1, 43, true, false,0,1,7878,"kkkkkkkk"];
// fruits1.push(fruitss)
// console.log(fruits1)
// const new_Hero = fruits1.concat(fruitss)// here only one is concat with other(main array)
// console.log(new_Hero)


// const new_Hero1 = [...fruits1, ...fruitss]//here more than one is concat with each other 
// console.log(new_Hero1)


// const my_Array=['aaaaaa', 'ssssss',['eeee',22,33,44,55],"rrrrrrrrrrr",["eeeeeeeee",333,65432,[444,989898,'rrrrrrrrrrr']]]

// const updated_arr = my_Array.flat(Infinity)// this function is used to desclose array under a array
// console.log(updated_arr)

// console.log(Array.isArray("satya"))//check the passing value is array or not

// console.log(Array.from("satya")) //this from use to convert element in to an array [ 's', 'a', 't', 'y', 'a' ], conditon is element should bw "____" quotes
// console.log(Array.from("sas,777777'hhghg'")) 

// console.log(Array.from({name:"satya"}))// here js confiuge reson is js not know covert ket to array or string to array so here return is [] empty array(**********most imp interview********)

// const a=300
// const b=400
// const c=800

// console.log(Array.of(a,b,c))// it use to merege multiple array or variable in single array
