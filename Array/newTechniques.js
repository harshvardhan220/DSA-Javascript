// Swap nums[i] and nums[j]
[nums[i], nums[j]] = [nums[j], nums[i]];

// Reverse the sub-array to the right of nums[i]
let left = i + 1;
let right = nums.length - 1;
while (left < right) {
  [nums[left], nums[right]] = [nums[right], nums[left]];
  left++;
  right--;
}
