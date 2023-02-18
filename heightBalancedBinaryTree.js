// tree =
//                                 1
//                                / \
//                               2   3
//                              / \   \
//                             4   5   6
//                                / \
//                               7   8

// output = true

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.
  const treeInfo = treeHelper(tree);
  return treeInfo.isBalanced;
}

function treeHelper(node) {
  if (node === null) return new TreeInfo(true, -1);

  const leftSubtree = treeHelper(node.left);
  const rightSubtree = treeHelper(node.right);

  const isBalanced =
    leftSubtree.isBalanced &&
    rightSubtree.isBalanced &&
    Math.abs(leftSubtree.height - rightSubtree.height) <= 1;

  const height = Math.max(leftSubtree.height, rightSubtree.height) + 1;

  return new TreeInfo(isBalanced, height);
}
