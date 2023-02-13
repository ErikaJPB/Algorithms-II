//   tree =        10
//                 / \
//                5  15
//               / \   \
//              2  5    22
//             /
//            1
//array = []

// output
// in order = [1,2,5,5,10,15,22]
// pre order = [10,5,2,1,5,15,22]
//post order = [1,2,5,5,22,15,10]

// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
