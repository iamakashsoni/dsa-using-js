const arr = [1, 2, 3, 4, 5];
//splice(start: number, deleteCount: number, ...items: number[])

//delete 1 element from index 1
arr.splice(1, 1);
console.log(arr);

// add element after index 1
arr.splice(1, 0, 9, 8, 7, 6, 5);
console.log(arr);
