function getArrayParams(...arr) {
let max = -Infinity;
let min = Infinity;
let sum = 0;
 max = Math.max(...arr);
 min = Math.min(...arr);
 sum = arr.reduce(function (currentSum, currentNumber){
  return currentSum + currentNumber;
 }, 0);
let avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let sum = 0;
for (let i = 0; i < arr.length; i += 1) {
  sum += arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
let max = -Infinity;
let min = Infinity;
if(arr.length === 0) {
  return 0;
}
max = Math.max(...arr);
min = Math.min(...arr);
return max - min;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
for(let i of arr) {
  if (i % 2 !== 0) {
    sumOddElement += i;
  } else {
    sumEvenElement += i;
  }
}
let result = sumEvenElement - sumOddElement
return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length ===0) {
    return 0;
  }
  for (let i of arr) {
		if (i % 2 === 0) {
			sumEvenElement += i;
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; ++i) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
