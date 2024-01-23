var majorityElement = function (nums) {
  let count1 = 0;
  let count2 = 0;
  let el1 = Number.MIN_VALUE;
  let el2 = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (count1 == 0 && el2 != nums[i]) { // el2 must not be equal to el1
      count1 = 1;
      el1 = nums[i];
    } else if (count2 == 0 && el1 != nums[i]) { //el1 must not be equal to el1
      count2 = 1;
      el2 = nums[i];
    } else if (nums[i] == el1) count1++;
    else if (nums[i] == el2) count2++;
    else {
      count1--;
      count2--;
    }
  }
  //To Do a manual check;
  let list = [];
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (el1 == nums[i]) count1++;
    if (el2 == nums[i]) count2++;
  }
  let mini = Math.floor(nums.length / 3) + 1;
  if (count1 >= mini) list.push(el1);
  if (count2 >= mini) list.push(el2);
  return list.sort((a, b) => a - b);
};
