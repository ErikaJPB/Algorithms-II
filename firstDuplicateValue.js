//O(n^2) time | O(1)space
function firstDuplicateValue(array) {
  // Write your code here.
  let minIdx = array.length;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        minIdx = Math.min(minIdx, j);
      }
    }
  }
  if (minIdx === array.length) return -1;

  return array[minIdx];
}

// O(n) time | O(n) space
function firstDuplicateValue(array) {
  // Write your code here.
  let seen = new Set();

  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      return array[i];
    } else {
      seen.add(array[i]);
    }
  }

  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])); //2
