// Problem Link - https://leetcode.com/problems/find-peak-element/
var findPeakElement = function (nums) {
  let n = nums.length;
  if (n == 0) return 0;
  //Write seperately for 1st and Last element.
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid] > nums[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    } //To avoid infinite loop if the array was [1,5,1,2,1]
  }
  return 0;
};
