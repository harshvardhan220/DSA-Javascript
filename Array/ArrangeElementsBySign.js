// [3,1,-2,-5,2,-4]
// output = [3,-2,1,-5,2,-4]

const ArrangeArrayElementsBySign = (arr) => {
  let resultantArray = [];
  let positiveIndex = 0;
  let negativeIndex = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      resultantArray[negativeIndex] = arr[i];
      negativeIndex += 2;
    } else {
      resultantArray[positiveIndex] = arr[i];
      positiveIndex += 2;
    }
  }
  return resultantArray;
};

let result = ArrangeArrayElementsBySign([3, 1, -2, -5, 2, -4]);
console.log(result);
