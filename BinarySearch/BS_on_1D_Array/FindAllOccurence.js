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
  if (lowerbound == nums.length || nums[lowerbound] != target) return 0;
  return UpperBound(nums, target) - lowerbound;
};

let result = searchRange([1, 2, 2, 2, 2, 3], 2);
console.log(result);
