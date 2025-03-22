// Question 3: count the numbers of digits of a number

function countNumberOfDigits(num) {
  let count = 0;
  num = Math.abs(num);
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(countNumberOfDigits(123));
console.log(countNumberOfDigits(-12345));
console.log(countNumberOfDigits(0));
