// tree
//                         15
//                        /  \
//                       5    20
//                      / \   / \
//                     2   5 17  22
//                    / \
//                   1   3

// k = 3

// output = 17

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space
function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const array = [];
  inOrderTraverse(tree, array);
  return array[array.length - k];
}

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

// O(h+k) time  | O(h) space

class TreeInfo {
  constructor(nodesVisited, lastestVisited) {
    this.nodesVisited = nodesVisited;
    this.lastestVisited = lastestVisited;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.lastestVisited;
}

function reverseInOrderTraverse(node, k, treeInfo) {
  if (node !== null && treeInfo.nodesVisited < k) {
    reverseInOrderTraverse(node.right, k, treeInfo);
    if (treeInfo.nodesVisited < k) {
      treeInfo.nodesVisited++;
      treeInfo.lastestVisited = node.value;
      reverseInOrderTraverse(node.left, k, treeInfo);
    }
  }
}
