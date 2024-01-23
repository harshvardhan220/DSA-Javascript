// Kadane’s Algorithm : Maximum Subarray Sum in an Array

let kadanesAlgorithm = (arr) => {
  let n = arr.length;
  let sum = 0;
  let maxi = 0;
  let ansStart, ansEnd;
  let start;

  for (let i = 0; i < n; i++) {
    if (sum == 0) {
      start = i;
    }
    sum += arr[i];

    if (sum < 0) {
      sum = 0;
    }
    if (sum > maxi) {
      maxi = sum;
      ansStart = start;
      ansEnd = i;
    }
  }
  return { maximumSum: maxi, startIndex: ansStart, endIndex: ansEnd };
};

let result = kadanesAlgorithm([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log(result);
