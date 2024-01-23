import React, { useState } from 'react';

const RandomColorButton = () => {
  const [number, setNumber] = useState(0);
  const [buttonColor, setButtonColor] = useState('#3498db'); // Initial color, you can set your preferred color

  const handleClick = () => {
    // Increase the number by 3 on each click
    setNumber(prevNumber => prevNumber + 3);

    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setButtonColor(randomColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, padding: '10px', margin: '10px', color: 'white' }}
        onClick={handleClick}
      >
        {number}
      </button>
    </div>
  );
};

export default RandomColorButton;
