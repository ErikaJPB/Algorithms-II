// O (n) time | O(1) space

function kadanesAlgorithm(array) {
  // Write your code here.
  let maxSum = array[0];
  let currentSum = array[0];

  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
);
//19
