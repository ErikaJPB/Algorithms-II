// O(n) time | O(1) space
function isMonotonic(array) {
  // Write your code here.

  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      decreasing = false;
    }
    if (array[i] > array[i + 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
// true
