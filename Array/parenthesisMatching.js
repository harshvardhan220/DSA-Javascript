// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced

// Input: exp = “[(])”
// Output: Not Balanced

const paranthesisMatching = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (
        (str[i] === "}" && top !== "{") ||
        (str[i] === ")" && top !== "(") ||
        (str[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
};

const isEmpty = (stack) => {
  return stack.length === 0;
};

console.log(paranthesisMatching("[()]{}[()()]"));
