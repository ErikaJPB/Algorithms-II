// O(n*m) time  | O(n) space

function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  let ways = new Array(width).fill(1);

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      ways[j] += ways[j - 1];
    }
  }

  return ways[width - 1];
}

console.log(numberOfWaysToTraverseGraph(2, 3));
