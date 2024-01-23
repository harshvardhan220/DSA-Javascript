// const findUnion = (arr1, arr2) => {
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let result = Array.from(set1)
//     Array.from(set2).map((el,i) => {
//         if(!result.includes(el)) { result.push(el)}
//     })

//     console.log(result)
// }

// findUnion([1,1,2,3,4,5], [2,3,4,4,5,6]);

// Approach 2 :- 2pointer approach
const findUnion = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let result = [];
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (result.length === 0 || result.pop() != arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else {
      if (result.length == 0 || result.pop() != arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (result.length == 0 || result.pop() != arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  while (j < n2) {
    if (result.length == 0 || result.pop() != arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }
  return result;
};
console.log(findUnion([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));
