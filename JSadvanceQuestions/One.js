// 1. Implement a function that converts a Javascript value into a JSON string.

const toJSON = (value) => {
  try {
    return JSON.stringify(value);
  } catch (error) {
    console.log(error);
    return null;
  }
};
// Example usage:
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

let result = toJSON(myObject);

if (result != null) {
  console.log(result);
}
