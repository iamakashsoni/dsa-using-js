// Question 2: Sum of digits of a number

function sumOfDigitsOfNumbers(num) {
  let total = 0;
  while (num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }
  return total;
}

console.log(sumOfDigitsOfNumbers(12));
