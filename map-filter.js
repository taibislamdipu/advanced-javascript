

// const numbers = [2, 3, 5, 7, 4, 8, 10];


// function square(element) {
//     console.log(element * element);
// } 

//  const result = numbers.map(function square(element) {
//     return element * element;
// });

// console.log(result);

// function square(element) {
//     return element * element;
// }

// const square = element => element * element; // square function ta Arrow function dia lekha hoise, jinis same
// const square = x => x * x; // same jinis just element er jaygay x likha

const numbers = [2, 3, 5, 7, 4, 8, 10];
// const result = numbers.map(function (element, index, array) {
//     return element * element;
// });

//const result = numbers.map(x => x * x); // Arrow function use kore map kora

//console.log(result);

const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5); // Find only check is there any value over 5, and return the first value it found.
console.log(isThere);

