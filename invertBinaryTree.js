// tree

//                        1
//                       / \
//                      2   3
//                     / \ / \
//                    4  5 6  7
//                   / \
//                  8  9

// output

//                        1
//                       / \
//                      3   2
//                     / \ / \
//                    7  6 5  4
//                           / \
//                          9   8

// O(n) time | O(n) space
function invertBinaryTree(tree) {
  // Write your code here.

  let queue = [tree];

  while (queue.length) {
    const current = queue.shift();
    if (!current) continue;
    swap(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swap(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

// O(n) time | O(d) space
function invertBinaryTree(tree) {
  // Write your code here.

  if (!tree) return;
  swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swap(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log(
  invertBinaryTree({
    nodes: [
      { id: "1", left: "2", right: "3", value: 1 },
      { id: "2", left: "4", right: "5", value: 2 },
      { id: "3", left: "6", right: "7", value: 3 },
      { id: "4", left: "8", right: "9", value: 4 },
      { id: "5", left: null, right: null, value: 5 },
      { id: "6", left: null, right: null, value: 6 },
      { id: "7", left: null, right: null, value: 7 },
      { id: "8", left: null, right: null, value: 8 },
      { id: "9", left: null, right: null, value: 9 },
    ],
    root: "1",
  })
);
