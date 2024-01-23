var generate = function (numRows) {
    const  generateRow = (row) => {
        let ans = 1;
        let ansRow = [];
        ansRow.push(1);
        for (let col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = ans / (col);
            ansRow.push(ans);
        }
        return ansRow;
    }

    let finalAns = [];
    for(i=1; i<=numRows; i++){
        finalAns.push(generateRow(i))
    }
    return finalAns;
};

let result = generate(6)
console.log(result);