// singleton
// object.create

// object literals

const mySym = Symbol("key1")    


const JsUser = {
    name: "Saurabh",
    "full name": "Saurabh yadav",
    [mySym]: "myKey1",
    age: 24,
    location: "delhi",
    email: "saurabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "saurabh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "saurabh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
