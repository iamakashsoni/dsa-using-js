const arr = [1, 2, -3, 4, -5, 6, 0];

arr.sort();
// arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);
