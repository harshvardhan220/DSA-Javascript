// Problem Link = https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = Number.MAX_VALUE;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[mid]) {
      //<= because to handle or a single element.
      ans = Math.min(ans, nums[low]);
      low = mid + 1; //First update answer and then move low.
    } else {
      high = mid - 1;
      ans = Math.min(ans, nums[mid]);
    }
  }
  return ans;
};
