// Currying in JavaScript, which involves transforming a function that takes multiple arguments
// into a series of functions that take one argument each, can be useful in various real-life applications. Here are some scenarios where currying is commonly employed:

// 1. Functional Composition:
// Currying is often used in functional programming to compose functions.
//  It allows you to create new functions by combining smaller functions
// in a more modular and reusable way.

const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const addFive = add(5);
const multiplyByTwo = multiply(2);

const result = multiplyByTwo(addFive(3)); // (5 + 3) * 2 = 16

// 2. Event Handling:
// In UI development, especially with frameworks like React or Angular,
// currying can be used to create event handlers that partially apply some arguments.

const handleInputChange = (fieldName) => (event) => {
  // Handle input change for a specific field
  console.log(`${fieldName} changed: ${event.target.value}`);
};

const handleNameChange = handleInputChange("Name");
const handleEmailChange = handleInputChange("Email");

//   3. Configurable Functions:
//   Currying allows you to create configurable functions by fixing certain parameters
//   and leaving others open. This can be handy for creating utility functions with default behavior.
const formatCurrency = (currencySymbol) => (value) => {
  return `${currencySymbol}${value.toFixed(2)}`;
};

const formatUSD = formatCurrency("$");
const formattedValue = formatUSD(25.5); // $25.50

//4. Middleware in Web Development:
// In web development, especially with middleware in frameworks like Express.js, currying can be used
// to create reusable middleware that can be applied to different routes with specific configurations.

const authenticationMiddleware = (requiredRole) => (req, res, next) => {
  // Check if the user has the required role
  if (userHasRole(req.user, requiredRole)) {
    next(); // User is authenticated
  } else {
    res.status(403).send("Unauthorized");
  }
};

const isAdminAuthenticated = authenticationMiddleware("admin");

// 5. Data Transformation Pipelines:
// Currying is useful in creating pipelines for data transformations. Each transformation step can be
// represented by a curried function, making the pipeline more readable and maintainable.

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const addd = (a) => (b) => a + b;
const multiplyy = (a) => (b) => a * b;

const transformData = pipe(add(5), multiply(2));

const resultt = transformData(3); // (3 + 5) * 2 = 16

// These are just a few examples, and currying can be a powerful technique in various other scenarios where
// functional programming concepts are applied. It promotes code reuse, composability,
// and can lead to more modular and maintainable code.
