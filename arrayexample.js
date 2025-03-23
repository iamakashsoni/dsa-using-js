// reverse an array
const arr = [1, -2, 3, -4, 0, 5, -6];
// arr.reverse();
// console.log(arr);

//Map, Filter & reduce
// const newMapArr = arr.map((item, i) => item * item);
// console.log(newMapArr);

// const positiveNumber = arr.filter((item, i) => item > 0);
// console.log(positiveNumber);

// const sumOfArr = arr.reduce((accumulator, index) => accumulator + index);
// console.log(sumOfArr);

//Flat
const y = [1, 2, [3, 5, [4, 7]]];
const flattedArray = y.flat(2);
console.log(flattedArray);
