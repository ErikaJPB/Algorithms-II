// tree=
//                                     1
//                                    / \
//                                   2   3
//                                  / \
//                                 4   5
//                                /
//                               6
// node = 5

// output = 1

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

//  O(n) time  | O(n) space

function findSuccessor(tree, node) {
  // Write your code here.
  const inOrderTraversal = inOrderTraversalHelper(tree);

  for (let i = 0; i < inOrderTraversal.length; i++) {
    const currentNode = inOrderTraversal[i];

    if (currentNode !== node) continue;
    if (i === inOrderTraversal.length - 1) return null;
    return inOrderTraversal[i + 1];
  }
}

function inOrderTraversalHelper(node, array = []) {
  if (node === null) return array;

  inOrderTraversalHelper(node.left, array);
  array.push(node);
  inOrderTraversalHelper(node.right, array);

  return array;
}
