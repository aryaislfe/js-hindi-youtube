// primitive datatypes

// 7 types : String, number, boolean, null, undefined, symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp =  null
let userEmail;

const id = Symbol ("123")
const anotherId = Symbol ("123")

// console.log(id === anotherId);

// const bigNumber = 34567891123456n

// Reference datatypes (non primitive)

// Array, objects, function

const heros = ["shaktiman", "Nagraj", "doga"];
let myObj = {
    name: "saurabh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof outsideTemp);



// stack (Primitive),  Heap (Non primitive)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubename = "saurbbhyadav.com"

let anothername = myYoutubename
anothername = "saurabharya"

console.log(myYoutubename);
console.log(anothername);

let userOne= {
    email: "user@google.com",
    upi:"user@ybl",
}
 let userTwo = userOne

 userTwo.email = "saurabh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 

 