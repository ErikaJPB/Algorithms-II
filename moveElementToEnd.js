// O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) {
      let aux = array[j];
      array[j] = array[i];
      array[i] = aux;
    }
    i++;
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
