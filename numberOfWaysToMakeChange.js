// O(nd) time | O(n) space

function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let i = 0; i < denoms.length; i++) {
    for (let j = denoms[i]; j <= n; j++) {
      ways[j] += ways[j - denoms[i]];
    }
  }
  return ways[n];
}

console.log(numberOfWaysToMakeChange(6, [1, 5]));
