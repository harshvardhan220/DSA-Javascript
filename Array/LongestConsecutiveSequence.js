const LongestConsecutiveSequence = (arr) => {
  let newArray = arr.sort((a, b) => a - b);
  let currCount = 0;
  let longest = Number.MIN_VALUE;
  let lastSmaller = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] - 1 == lastSmaller) {
      currCount = currCount + 1;
      lastSmaller = newArray[i];
    } else if (newArray[i] != lastSmaller) {
      count = 1;
      lastSmaller = newArray[i];
    }
    longest = Math.max(longest, currCount);
  }
  return longest;
};

let result = LongestConsecutiveSequence([5, 8, 3, 2, 1, 4]);
console.log(result);
