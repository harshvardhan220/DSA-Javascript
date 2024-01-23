// import React, { useEffect, useState } from "react";

import { useState } from "react";

const CircularInputList = () => {
  const [inputText, setInputText] = useState("");
  const [outputList, setOutputList] = useState("");


  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  //   const handleButtonClick = () => {
  //     if (inputText.trim() !== "") {
  //       const updatedList = [
  //         inputText.slice(-1) + outputList[0],
  //         ...outputList.slice(0, 5),
  //       ].filter(Boolean); // Filter out any undefined items
  //       setOutputList(updatedList);
  //       setInputText("");
  //     }
  //   };

  let i = 1;
  let result =""
  result = inputText.substring(i) + inputText.substring(0, i);


  const updateStr = (e) => {
    if (i > inputText.length) {
      i = 1;
    } else {
      e.preventDefault();
      setOutputList(inputText)
      setInputText(result);
      setOutputList(result)
      console.log(outputList)
      i++;
    }
  };


  return (
    <div>
      <ul>
        {/* {outputList.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
        {outputList.length!==0 && outputList}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a word"
      />
      <button onClick={updateStr}>Add to List</button>
    </div>
  );
};

export default CircularInputList;

//  const CircularInputList = () => {
//   const [loading, setLoading] = useState(true)
//   const load = () => {
//       setTimeout(()=>setLoading(false),5000);
//   }
//   if(loading){
//       return <h1>Loading</h1>
//   }
//   return (
//       <h1>Complete</h1>
//   )
// }
// export default CircularInputList


