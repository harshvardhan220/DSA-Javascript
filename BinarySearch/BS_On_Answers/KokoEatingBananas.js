// Problem Link - https://leetcode.com/problems/koko-eating-bananas/
const kokoEatingBananas = (arr, h) => {
  const findMax = (arr) => {
    let maxi = Number.MIN_VALUE;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      maxi = Math.max(maxi, arr[i]);
    }
    return maxi;
  };
  const calculateTotalHours = (arr, hourly) => {
    let totalH = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      totalH += Math.ceil(arr[i] / hourly);
    }
    return totalH;
  };
  let low = 1;
  let high = findMax(arr);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalH = calculateTotalHours(arr, mid);
    if (totalH <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

let result = kokoEatingBananas([30, 11, 23, 4, 20], 5);
console.log(result);
