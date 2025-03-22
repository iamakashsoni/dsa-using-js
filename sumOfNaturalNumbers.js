// Question 1: sum of all natural numbers from 1 to n

function sumOfNaturalNumber(n) {
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     sum += i;
  //   }
  //   return sum;

  return (n * (n + 1)) / 2;
}

console.log(sumOfNaturalNumber(5));
console.log(sumOfNaturalNumber(10));
console.log(sumOfNaturalNumber(3));
