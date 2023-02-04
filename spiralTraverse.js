// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7

// O(n) time | O(n) space
function spiralTraverse(array) {
  // Write your code here.
  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //Traverse top row
    for (let i = startCol; i <= endCol; i++) {
      result.push(array[startRow][i]);
    }

    //Traverse right column
    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(array[i][endCol]);
    }

    //Traverse bottom row

    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break;
      result.push(array[endRow][i]);
    }

    //Traverse left column
    for (let i = endRow - 1; i > startRow; i--) {
      if (startCol === endCol) break;
      result.push(array[i][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
