// tree =

//                                1
//                              /   \
//                             2     2
//                           /  \   /  \
//                          3   4  4    3
//                         / \         / \
//                        5   6       6   5

// output = true

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space
function symmetricalTree(tree) {
  let stackLeft = [tree.left];
  let stackRight = [tree.right];

  while (stackLeft.length > 0) {
    let left = stackLeft.pop();
    let right = stackRight.pop();

    if (!left && !right) continue;

    if (!left || !right || left.value !== right.value) {
      return false;
    }

    stackLeft.push(left.left);
    stackLeft.push(left.right);
    stackRight.push(right.right);
    stackRight.push(right.left);
  }

  return true;
}

// O(n) time | O(h) space
function symmetricalTree(tree) {
  // Write your code here.
  return isMirror(tree.left, tree.right);
}

function isMirror(left, right) {
  if (left !== null && right !== null && left.value === right.value) {
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return left === right;
}
