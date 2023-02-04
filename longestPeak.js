// O(n) time | O(1) space

function longestPeak(array) {
  // Write your code here.
  let longestPeaklength = 0;
  let i = 1;

  while (i < array.length - 1) {
    let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }
    let currentPeakLength = rightIdx - leftIdx - 1;
    longestPeaklength = Math.max(longestPeaklength, currentPeakLength);
    i = rightIdx;
  }
  return longestPeaklength;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
//6
