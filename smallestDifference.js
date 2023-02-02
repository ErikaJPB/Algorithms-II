// O(n^2) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  let smallestDifference = Infinity;
  let smallestElements;

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const currDif = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (currDif < smallestDifference) {
        smallestDifference = currDif;
        smallestElements = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  return smallestElements;
}

//O(n log (n)  + m log(m)) time | O(1) space

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallestDifference = Infinity;
  let currDif = Infinity;
  let result = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      currDif = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      currDif = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallestDifference > currDif) {
      smallestDifference = currDif;
      result = [firstNum, secondNum];
    }
  }
  return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
//[28, 26]
