const floorSqRoot = (n) => {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = mid * mid;
    if (val <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
};

let result = floorSqRoot(25);
console.log(result);