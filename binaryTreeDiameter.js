// tree =
//                                1
//                               / \
//                              3   2
//                             / \
//                            7   4
//                           /     \
//                          8       5
//                         /         \
//                        9           6

//output = 6

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space

function binaryTreeDiameter(tree) {
  // Write your code here.
  let maxDiameter = -Infinity;

  function binaryTreeDiameterHelper(node) {
    if (node === null) return 0;

    const leftHeight = binaryTreeDiameterHelper(node.left);
    const rightHeight = binaryTreeDiameterHelper(node.right);
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  binaryTreeDiameterHelper(tree);
  return maxDiameter;
}
