// Problem Link :- https://leetcode.com/problems/single-element-in-a-sorted-array/
var singleNonDuplicate = function (arr) {
  let n = arr.length;
  if (n == 1) return arr[0];
  if (arr[0] != arr[1]) return arr[0];
  if (arr[n - 1] != arr[n - 2]) return arr[n - 1];
  let low = 1;
  let high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
      return arr[mid];
    }
    //We are on left half.
    if (
      (mid % 2 == 1 && arr[mid] == arr[mid - 1]) ||
      (mid % 2 == 0 && arr[mid] == arr[mid + 1])
    ) {
      low = mid + 1;
    }
    //We are on right half.
    else {
      high = mid - 1;
    }
  }
  return -1;
};
