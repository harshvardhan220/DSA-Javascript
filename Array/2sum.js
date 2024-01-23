// [1,2,3,8,2,5,8,4,5]
//1. Sort The array.
//2. Take two pointers. one to the start and another to end.
//3. If sum of two pointers is greater than target then, rightPP-- 
//   If sum is less than target then leftPP++

const twoSum = (arr, target) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let leftPP = 0;
  let rightPP = arr.length - 1;

  while (leftPP < rightPP) {
    let sum = sortedArr[leftPP] + sortedArr[rightPP];
    if (sum == target) {
      return "YES";
    } else if (sum < target) {
      leftPP++;
    } else {
      rightPP--;
    }
  }
  return "NO";
};

let result = twoSum([1, 2, 3, 8, 2, 5, 8, 4, 5], 16);
console.log(result);


// If you want to return The indexes 

// const twoSum = (nums, target) => {
//   let arr = nums.map((el,i) => {return {el: el, index: i}})
//   let sortedArrayWithIndex = arr.sort((a,b) => a.el - b.el) 
//   let twoSumArray = sortedArrayWithIndex?.map((el, i) => el.el)
//  console.log(sortedArrayWithIndex)
//  let left = 0;
//  let right = nums.length -1;

 
//  while(left < right ){
//     if(sortedArrayWithIndex[left].el + sortedArrayWithIndex[right].el === target) {
//         return [sortedArrayWithIndex[left].index, sortedArrayWithIndex[right].index]
//     }
   
//      else if(twoSumArray[left] + twoSumArray[right] < target){
//          left++
//      } else {
//          right--
//      }
//  }
 
// }

// let result = twoSum([2,7,11,15], 9)
// console.log(result)