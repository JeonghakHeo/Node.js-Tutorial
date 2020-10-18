const counter = (array) => {
  return `The array has ${array.length} elements in it`
}

const adder = (a, b) => {
  return a + b;
};

const pi = 3.14;

const multiply = (a, b) => {
  return a * b;
}

// Different ways to export modules

// * First way *
// module.exports = multiply;

// * Second way *
// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// * Third way *
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
  multiply: multiply
}

