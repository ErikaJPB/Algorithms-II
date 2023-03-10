//O(n) time | O(1) space

function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIndex = 0;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIndex === 0) return false;
    numElementsVisited++;
    currentIndex = getNextIndex(currentIndex, array);
  }
  return currentIndex === 0;
}

function getNextIndex(currentIndex, array) {
  const jump = array[currentIndex];
  const nextIndex = (currentIndex + jump) % array.length;
  return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
