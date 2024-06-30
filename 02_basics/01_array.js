// array

const myArr = [0, 1, 2, 3, 4, 5 ]
const myHeors =["shanktian", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) = add on
// myArr.push(7) = add on
// myArr.pop()  =remove last word

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2);
