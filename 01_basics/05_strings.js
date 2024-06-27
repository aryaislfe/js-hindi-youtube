const name = "saurabh"
const repoCount = 1

// console.log(name + repoCount + " value ");

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String ('saurabhh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    saurabh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saurabh.com/saurabh%56yadav" 

console.log(url.replace('%56', '-'))

console.log(url.includes('saurabh'));

console.log(gameName.split('-')); 