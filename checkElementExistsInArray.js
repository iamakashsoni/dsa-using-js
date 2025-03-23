const arr = [1, 2, 3, 4, 5];
const element = (checkElementExistsInArray = (arr, target) => {
  for (let i of arr) {
    if (i === target) return true;
  }
  return false;
});

console.log(element(arr, 5));
console.log(element(arr, "5"));

console.log(arr.includes("5"));
console.log(arr.includes(5));
