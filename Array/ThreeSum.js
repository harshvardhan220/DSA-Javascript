var threeSum = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue; //Continue will start a new iteration.
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++;
        k--;
        // To move j & k if the next element is same and to get a new value.
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      }
    }
  }
  return ans;
};
