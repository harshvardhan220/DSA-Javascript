import React, { useEffect, useState } from "react";

const SixtySquare = () => {
  const [squares, setSquares] = useState(Array(60).fill(true));

  useEffect(() => {
    let intervalId = setInterval(() => {
      let blackIndex = squares.findIndex((square) => square);
      if (blackIndex !== -1) {
        let newSquares = [...squares];
        newSquares[blackIndex] = false;
        setSquares(newSquares);
      } else {
        setSquares(Array(60).fill(true));
      }
    }, 1000);

    // Clear Interval on Component Unmount.
    return () => {
      clearInterval(intervalId);
    };
  }, [squares]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '5px',
      }}
    >
      {squares?.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              height: '20px',
              width: '20px',
              background: el ? 'black' : 'white',
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default SixtySquare;
