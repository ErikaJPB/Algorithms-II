// O(nlog(n)) time  | O(n) space

function mergeOverlappingIntervals(array) {
  // Write your code here.

  let sortedArray = array.sort((a, b) => a[0] - b[0]);

  let mergedArray = [];
  let currentArray = sortedArray[0];
  mergedArray.push(currentArray);

  for (let nextArray of sortedArray) {
    let [_, currentEnd] = currentArray;
    let [nextStart, nextEnd] = nextArray;

    if (currentEnd >= nextStart) {
      currentArray[1] = Math.max(currentEnd, nextEnd);
    } else {
      currentArray = nextArray;
      mergedArray.push(currentArray);
    }
  }
  return mergedArray;
}

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
);
//[[1,2],[3,8],[9,10]]
