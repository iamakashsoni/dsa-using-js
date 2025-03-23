const arr = [1, 2, 3, 4, 5];
console.log("Arr:", arr);

// const arr2 = Array.from(arr);
// const arr2 = [...arr];
const arr2 = arr.concat();
arr2.splice(1, 3);

console.log("Arr:", arr);
console.log("Arr2:", arr2);

// Deep copy does change in arr2 only
