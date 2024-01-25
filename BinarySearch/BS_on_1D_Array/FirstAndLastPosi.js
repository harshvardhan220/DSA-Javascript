//Problem Link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function (nums, target) {
  const Lowerbound = (arr, x) => {
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
  const UpperBound = (arr, x) => {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > x) {
        //Problem condition
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  };

  let lowerbound = Lowerbound(nums, target);
  if (lowerbound == nums.length || nums[lowerbound] != target) return [-1, -1];
  return [lowerbound, UpperBound(nums, target) - 1];
};
