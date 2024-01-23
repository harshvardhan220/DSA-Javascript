const NextPermutation = (arr) => {
  let n = arr.length;
  let index = -1;
  let temp;

  //Find Breakpoint
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    return arr.reverse();
  }
  //Swap with breakpoint and larger element than breakpoint
  for (let i = n - 1; i > index; i--) {
    if (arr[i] > arr[index]) {
      temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      break;
    }
  }

  //To reverse an array from a particular index to end.
  return arr.slice(0, index + 1).concat(arr.slice(index + 1, n).reverse());
};

let result = NextPermutation([2, 1, 5, 4, 3, 0, 0]);
console.log(result);
