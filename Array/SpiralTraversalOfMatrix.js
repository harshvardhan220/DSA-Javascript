var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  let ans = [];

  while (top <= bottom && left <= right) {
    // right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    // right to left
    if (top <= bottom && left <= right) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // bottom to top
    if (left <= right && top <= bottom) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
};
