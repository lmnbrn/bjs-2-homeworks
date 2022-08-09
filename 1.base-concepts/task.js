"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant, squareRoot;

  discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    squareRoot = -b / (2 * a);
    arr.push(squareRoot);
  } else {
    if (discriminant > 0) {
      console.log(Math.sqrt(discriminant));
      console.log(-b + Math.sqrt(discriminant));
      console.log(2 * a);
      squareRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot);
      squareRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot);
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  // поскольку задача "со звёздочкой", пропускаю её для экономии времени.

  return totalAmount;
}