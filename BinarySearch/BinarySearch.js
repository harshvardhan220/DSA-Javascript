//Time Complexity:- log2N (log base2 N)
//Itrative Approach.

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //Make sure its Math.Floor.
    if (arr[mid] == target) return arr[mid];
    else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

//Recursive Approach.

const binarySearch2 = (arr, low, high, target) => {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2); //Make sure its Math.Floor.
  if (arr[mid] == target) return mid;
  else if (target > arr[mid]) {
    binarySearch2(arr, mid + 1, high, target);
  }
  return binarySearch2(arr, low, high - 1, target);
};

const recursiveApproach = (arr) => {
  return binarySearch2(arr, 0, arr.length - 1, 6);
};

// let result = binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6);
let result = recursiveApproach([3, 4, 5, 6, 7, 9, 12, 16, 17]);
console.log(result);
