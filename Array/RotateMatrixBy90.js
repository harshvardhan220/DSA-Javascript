var rotate = function (matrix) {
  let temp;
  let n = matrix.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      //Swap
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
