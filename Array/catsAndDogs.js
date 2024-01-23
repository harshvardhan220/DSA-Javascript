//Input: "cats AND*Dogs-are Awesome"
// Output: catsAndDogsAreAwesome

function cleanAndConcatenate(input) {
  // Remove special characters and spaces
  const cleanedString = input.replace(/[^a-zA-Z]/g, " ");

  // Convert to lowercase and split into words
  const words = cleanedString.toLowerCase().split(" ");

  // Concatenate the words
  const result = words;
  let newResult = [];
  let firstWord = result[0];

  for (let i = 1; i < result.length; i++) {
    newResult.push(
      result[i].replace(result[i].charAt(0), result[i].charAt(0).toUpperCase())
    );
  }

  return firstWord + newResult.join("");
}

const inputString = "cats AND*Dogs-are Awesome";
const output = cleanAndConcatenate(inputString);

console.log(output);
