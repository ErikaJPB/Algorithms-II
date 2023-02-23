//O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.

  let ways = new Array(n + 1).fill(Infinity);
  ways[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    for (let j = denoms[i]; j <= n; j++) {
      ways[j] = Math.min(ways[j], ways[j - denoms[i]] + 1);
    }
  }
  return ways[n] === Infinity ? -1 : ways[n];
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));
