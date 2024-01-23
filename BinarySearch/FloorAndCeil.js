//Floor and ciel in sorted array.
//Floor = largest no. in array <= x
//Ceil = smallest no. in array >= x

const floor = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1; //*

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= mid) {
      //Problem condition
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

let result = Lowerbound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 9);
console.log(result);
