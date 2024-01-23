// Same code of Lower Bound
var searchInsert = function (arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      //Problem condition
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
