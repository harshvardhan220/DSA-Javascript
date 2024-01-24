//1. Find the minimum in rotated sorted array.
//2. Index of the minimum is the answer.

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
  return nums.indexOf(ans); // Main Line.
};

let result = findMin([2, 3, 4, 5, 1]);
console.log(result);
