"use strict";
/*  Задача1  */

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
   if (d === 0) {
    let root1 = -b / (2 * a);
     arr.push(root1);
    return arr;
  } else if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
  return arr;
}
console.log(solveEquation(2, 8, 2));

/* Задача 2  */

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 let loanBody = amount - contribution;
 let partPercent = percent/1200;
 let payment = loanBody * (partPercent + (partPercent / (((1 + partPercent)**countMonths) - 1)));
 let totalAmount = payment*countMonths;
 return Number(totalAmount.toFixed(2));
}
calculateTotalMortgage(1, 0, 50000, 12);
calculateTotalMortgage(1, 1000, 50000, 12);
calculateTotalMortgage(1, 0, 20000, 24);
calculateTotalMortgage(1, 20000, 20000, 24);
calculateTotalMortgage(0.5, 50, 30000, 24);
