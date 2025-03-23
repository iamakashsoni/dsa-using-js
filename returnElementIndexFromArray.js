const arr = [1, 2, 3, 4, 5];
const element = (returnElementIndexFromArray = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
});

console.log(element(arr, 5));
console.log(element(arr, "5"));

console.log(arr.indexOf("5"));
console.log(arr.indexOf(5));
