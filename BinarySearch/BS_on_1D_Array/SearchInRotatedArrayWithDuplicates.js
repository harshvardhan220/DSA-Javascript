//Problem Link:-  https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
var search = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) return true;
    if (arr[low] == arr[mid] && arr[mid] == arr[high]) {
      // Handle This Sitaution by shrinking search space.
      low++;
      high--;
      continue;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};
