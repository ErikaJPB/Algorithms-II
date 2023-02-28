// O(nm) time | O(nm) space

function levenshteinDistance(str1, str2) {
  // Write your code here.

  const table = [];
  for (let i = 0; i <= str2.length; i++) {
    const row = [];
    for (let j = 0; j <= str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    table.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          1 + Math.min(table[i - 1][j - 1], table[i - 1][j], table[i][j - 1]);
      }
    }
  }
  return table[str2.length][str1.length];
}

console.log(levenshteinDistance("abc", "yabd")); //2
