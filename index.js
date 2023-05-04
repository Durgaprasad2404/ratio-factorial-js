let fact = require("../factorial/index.js");
let ratio = require("../ratio/index.js");

function ratioAndFactorial(a, b, c) {
  let obj = {
    ratio: ratio(a, b),
    factorial: fact(c),
  };
  return obj;
}

module.exports = ratioAndFactorial;
