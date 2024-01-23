// Input:- [1,2,3,4,5]
// Output:- 4

let BinarySearch = (inputArr, target) => {
  let startPointer = 0;
  let endPointer = inputArr.length - 1;

  while (startPointer <= endPointer) {
    let middle = Math.floor((startPointer + endPointer) / 2);

    if (target === inputArr[middle]) {
      return console.log("The element is at Index :- ", middle);
    }

    if (target < inputArr[middle]) {
        endPointer = middle - 1;
    } else {
        startPointer = middle + 1;
    }
  }
  return console.log("Element not present in array");
};

BinarySearch([1, 2, 3, 4, 5], 1) // Time Complexity is O(logn)



