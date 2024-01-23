const longestSubarray = (arr, k) => {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum == k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
};

let result = longestSubarray([1, 2, 1, 3], 2);
console.log(result);
