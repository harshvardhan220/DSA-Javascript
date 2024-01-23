// const firstLargest = (arr) => { //Brute Force
//     arr.sort((a,b) => a-b)
//     return arr[arr.length - 1];
// } 
const firstLargest = (arr) => { //Optimal Solution
    let el = arr[0];
    for(let i=1; i< arr.length; i++){
        if(arr[i] > el){
            el = arr[i]
        }
    }
    return el
   
} 

console.log(firstLargest([2,5,1,6,4,9,10,2,7]))