//  the way you are popping elements from the ans array. When you pop an element, it is removed from the array, and if you pop again to access the second element, it's not the same element you were comparing earlier. To fix this, you should store the popped element in a variable and use that variable for further comparisons. Here's the corrected code:

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];

  for (let i = 0; i < intervals.length; i++) {
    // if answer array is empty or current interval doesn't overlap with the previous one
    // In this corrected code, I've used ans[ans.length - 1] to access the last element in the ans array without removing it, ensuring that the correct element is used for comparisons and updating.
    if (ans.length === 0 || intervals[i][0] > ans[ans.length - 1][1]) {
      ans.push(intervals[i]);
    }
    // If the element overlaps with the previous interval
    else {
      let lastInterval = ans.pop();
      lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
      ans.push(lastInterval);
    }
  }

  return ans;
};

let result = merge([
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
]);
console.log(result);
