// const secondLargest = (arr) => {
//     let set = new Set(arr);
//     let resultArray = Array.from(set);
//     resultArray.sort((a,b) => a-b);
//     return resultArray[resultArray.length - 2] 
// } 

const secondLargest = (arr) => {
    let n = arr.length;
    let sorted = arr.sort((a,b) => a-b)
    let largest = sorted[n-1]

    for(let i=n-2; i>=0; i-- )
    {
        if(sorted[i] < largest){
            largest = sorted[i]
            break;
        }
    }
    return largest

}

console.log(secondLargest([2,5,10,1,6,4,9,2,7,7,9,9,9,9,]))