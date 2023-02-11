//                                10
//                               /  \
//                             5     15
//                           /   \   / \
//                          2    5  13  22
//                        /          \
//                       1           14

// output: true


// O(n) time | O(d) space
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, minValue, maxValue) {
  if (!tree) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  return (
    helper(tree.left, minValue, tree.value) &&
    helper(tree.right, tree.value, maxValue)
  );
}
