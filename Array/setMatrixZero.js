const setMatrixZero = () => {
  let matrix = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ];

  let col = [0];
  let row = [0];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

let result = setMatrixZero();
console.log(result);


//Leetcode BruteForce. Time complexity = O(2xmxn) Space Complexity = O(n) + O(m)
// var setZeroes = function (matrix) {
//     let col = [0];
//     let row = [0];

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] == 0) {
//                 row[i] = 1;
//                 col[j] = 1;
//             }
//         }
//     }
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (row[i] || col[j]) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     return matrix;
// };