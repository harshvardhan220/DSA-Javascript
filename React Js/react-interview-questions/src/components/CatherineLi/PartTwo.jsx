import React, { useState } from "react";
//Task is to sort the data so that we can see which one of our friend called us the most.
//Calculate Total Calls of each person
// Output :-
// Jamie : 14
// Anna : 3
// Sam : 19
// Tony : 9
// James : 1

const PartTwo = () => {
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

  const totalCallsPerson = calls.reduce((callsByName, item) => {
    const currentName = item.name;
    if (callsByName.hasOwnProperty(currentName)) {
      callsByName[currentName] = callsByName[currentName] + item.numOfCalls;
    } else {
      callsByName[currentName] = item.numOfCalls;
    }
    return callsByName;
  }, {});

  const result = Object.entries(totalCallsPerson);
  console.log(result); // Answer of Above Question.

  //   Q2. Sort the TotalCallsPerson Object By the total no. of calls Recieved.

  let sortedArray = [];
  for (const name in totalCallsPerson) {
    //Alternate Way of Object.entries.
    sortedArray.push({ name: name, numberOfCalls: totalCallsPerson[name] });
  }

  //Sorted.
  sortedArray.sort((a, b) => {
    return b.numberOfCalls - a.numberOfCalls;
  });

  //Part 3: Implement Search Functionality.
  const [searchTerm, setSearchTerm] = useState("");
  let filteredArray = sortedArray.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      {filteredArray.map((el, i) => {
        return (
          <ul key={i}>
            <li>
              {el.name} : {el.numberOfCalls}
            </li>
          </ul>
        );
      })}
      {/* {sortedArray.map((el, i) => {
        return (
          <ul key={i}>
            <li>
              {el.name} : {el.numberOfCalls}
            </li>
          </ul>
        );
      })} */}
    </>
  );
};

export default PartTwo;
