const majorityElement = (arr) => {
  let count = 0;
  let finalCount = 0;
  let el = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      el = arr[i];
      count = 1;
    } else if (el == arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == el) {
      finalCount++;
    }
  }
  if (finalCount > arr.length / 2) {
    return el;
  }
  return -1;
};

let result = majorityElement([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]);
console.log(result);
