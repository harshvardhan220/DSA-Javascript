var minDays = function (bloomDay, m, k) {
  const possible = (arr, m, k, day) => {
    let n = arr.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] <= day) {
        cnt++;
        if (cnt === k) {
          m--;
          cnt = 0;
        }
      } else {
        cnt = 0;
      }
    }
    return m <= 0;
  };

  const binarySearch = (arr, m, k) => {
    let low = Math.min(...arr);
    let high = Math.max(...arr);

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (possible(arr, m, k, mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };

  if (m * k > bloomDay.length) {
    return -1; // Impossible to make m bouquets
  }

  return binarySearch(bloomDay, m, k);
};
