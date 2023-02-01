// O(n^2) time | O(n) space

function threeNumberSum(array, targetSum) {
  // Write your code here.

  array = array.sort((a, b) => a - b);

  let triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
//[[-8,2,6],[-8,3,5],[-6,1,5]]
