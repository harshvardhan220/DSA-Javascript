//Brute-force Approach.
let countInversions = (arr) => {
  let count = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        result.push([arr[i], arr[j]]);
        count += 1;
      }
    }
  }
  return count;
};

let result = countInversions([5, 3, 2, 4, 1]);
console.log(result);
