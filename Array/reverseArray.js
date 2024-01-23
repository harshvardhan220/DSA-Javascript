//2pointer

const reverseArray = (arr, n) => {
  let p1 = 0;
  let p2 = n - 1;
  let temp;
  while (p1 < p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1++;
    p2--;
  }
  return arr;
};
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = reverseArray(array, array.length);
console.log(result);
