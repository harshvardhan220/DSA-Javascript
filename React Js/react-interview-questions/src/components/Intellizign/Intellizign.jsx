// import React, { useEffect, useRef, useState } from "react";

// const Intellizign = () => {
//   const [inputText, setInputText] = useState("");
//   const [resultText, setResultText] = useState("");
//   const [answer, setAnswer] = useState([]);

//   useEffect(() => {
//     handleSubmit();
//   }, [resultText]);

//   // console.log(null === undefined);

//   const inputRef = useRef();

//   const handleSubmit = () => {
//     // console.log(inputRef.current.value);
//     // setInputText("");
//     // setResultText(inputText);
//     // setInputText("");
//     // setAnswer(resultText.split(" "));
//   };

//   return (
//     <>
//       <div className="input">
//         <input
//           value={inputText}
//           ref={inputRef}
//           onChange={(e) => {
//             setInputText(e?.target?.value);
//           }}
//           type="text"
//         />
//         <button onClick={handleSubmit}>Submit (Intellizign)</button>
//         <br />
//         {inputText.split(" ")?.map((el, i) => {
//           return <div key={i}>{el[0]}</div>;
//         })}
//       </div>
//     </>
//   );
// };

// export default Intellizign;

import React, { useState } from 'react';

const Intellizign = () => {
  // State to store input values
  const [inputValue, setInputValue] = useState('');
  const [storedArray, setStoredArray] = useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Store the input value in the array
    setStoredArray([...storedArray, inputValue]);

    // Clear the input field
    setInputValue('');
  };

  return (
    <div>
      {/* Input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit (Intellizign)</button>
      </form>

      {/* Display the stored values */}
      <div>
        {storedArray.map((value, index) => (
          <p key={index}>{value}</p>
          // <p key={index}>{value[0]}</p>
        ))}
      </div>
    </div>
  );
};

export default Intellizign;

