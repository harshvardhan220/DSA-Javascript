import React from "react";

//Task is to display the object in the form of ex. Tony: 12

const PartOne = () => {
  const calls = [
    { name: "Jamie", numOfCalls: 7 },
    { name: "Anna", numOfCalls: 2 },
    { name: "Sam", numOfCalls: 3 },
    { name: "Tony", numOfCalls: 8 },
    { name: "Jamie", numOfCalls: 7 },
    { name: "Anna", numOfCalls: 1 },
    { name: "Sam", numOfCalls: 16 },
    { name: "Tony", numOfCalls: 1 },
    { name: "James", numOfCalls: 1 },
  ];
  return (
    <div>
      {calls.map((el, i) => {
        return (
          <ul key={i}>
            <li>
              {el?.name} : {el?.numOfCalls}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default PartOne;
