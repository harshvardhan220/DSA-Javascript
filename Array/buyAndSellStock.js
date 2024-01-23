const buyAndSell = (arr) => {
  let mini = arr[0];
  let maxProfit = 0;
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let cost = arr[i] - mini;
    maxProfit = Math.max(cost, maxProfit);
    mini = Math.min(arr[i], mini);
  }
  return maxProfit;
};

let result = buyAndSell([7, 1, 5, 3, 6, 4]);
console.log(result);
