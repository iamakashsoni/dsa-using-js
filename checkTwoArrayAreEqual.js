const isArrayEqual = (arr1, arr2) => {
  //   if (arr1.length != arr2.length) {
  //     return false;
  //   }

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) return false;
  //   }
  //   return true;

  return (
    arr1.length === arr2.length && arr1.every((elem, i) => arr1[i] === arr2[i])
  );
};

const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(isArrayEqual(arr, arr2));
