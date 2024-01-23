
// India is my country
// Aidni si ym yrtnuoc 

function wordReverse(str){
    let splitString = str.split(" ");
     let result = [];
  
    for(let i=0; i<splitString.length ; i++){
     result.push(splitString[i].split("").reverse().join(""))
    }
    return result;
  }
  
  let finalResult = wordReverse("India is my country")
  console.log(...finalResult) //aidnI si ym yrtnuoc

