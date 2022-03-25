"use strict";
let num = 266219;

let product = num
  .toString()
  .split("")
  .reduce((prod, current) => prod * current, 1);

console.log(product);

let degree = product ** 3;

console.log(degree.toString()[0] + degree.toString()[1]);
