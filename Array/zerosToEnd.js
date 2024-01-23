const moveZeroToEnd = (arr) => {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  if (j == -1) return arr; //If No zeros
  for (let i = j + 1; i < arr.length; i++) {
    let temp;
    if (arr[i] !== 0) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
};

console.log(moveZeroToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
