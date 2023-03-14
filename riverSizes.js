// O(n*m) time | O(n*m) space

function riverSizes(matrix) {
  const sizes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        sizes.push(getRiverSize(matrix, i, j));
      }
    }
  }
  return sizes;
}

function getRiverSize(matrix, i, j) {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[0].length ||
    matrix[i][j] === 0
  ) {
    return 0;
  }
  matrix[i][j] = 0;
  let size = 1;
  size += getRiverSize(matrix, i + 1, j);
  size += getRiverSize(matrix, i - 1, j);
  size += getRiverSize(matrix, i, j + 1);
  size += getRiverSize(matrix, i, j - 1);
  return size;
}
