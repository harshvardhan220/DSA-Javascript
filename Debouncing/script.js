let counter = 1;
const getData = () => {
  console.log("Fetching", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn().apply(context, args); //
    }, delay);
  };
};

const betterFunction = debounce(getData, 500);

//we use apply to fix our this variables and context, so that the environment or
//lexical scope where this function is running is correct and the same getData() is called with the same arguments
// if it has.