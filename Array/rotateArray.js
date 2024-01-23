//Rotate Array by 1

// const rotateArray = (arr) => {
//     let temp = arr[0];
//     for(let i=1; i<arr.length; i++){
//         arr[i-1] = arr[i]
//     }
//     arr[arr.length-1] = temp;
//     return arr;
// }

// let result = rotateArray([1,2,3,4]);

// console.log(result)

// Left Rotate Array by d places; (Brute Force Approach.)
const leftRotate = (arr, n, d) => {
    d = d % n;
    let temp = []
    //Save d elements in temp array;
    for(let i =0; i< d ; i++){
        temp.push(arr[i])
    }
    //Shift Array
    for(let i=d; i<n; i++){
        arr[i-d] = arr[i];
    }
    //add temp array elements at last
    for(let i=n-d; i<n; i++){
        arr[i] = temp[i-(n-d)];
    }
    return arr;
}

let result = leftRotate([1,2,3,4,5,6,7], 7, 3)
console.log(result)

//Approach 2
// const rotate = (array, d) => {
//     let n = array.length;
//    d = d % n;
//   let firstPart = array.splice(0, d).reverse((a, b) => a - b);
//   let secondPart = array.splice(0, 4).reverse((a, b) => a - b);
//   let result = firstPart.concat(secondPart).reverse((a, b) => a - b);
//   return result
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
