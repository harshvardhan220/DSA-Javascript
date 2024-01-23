const BubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};
let arr = [40, 2, 3, 4, 5];
BubbleSort(arr);
console.log(arr);
