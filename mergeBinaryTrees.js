// tree 1 =

//                          1
//                         / \
//                        3   2
//                       / \
//                      7   4

// tree 2 =
//                          1
//                         / \
//                        5   9
//                       /   / \
//                      2   7   6

// output =
//                          2
//                         / \
//                        8   11
//                       / \  / \
//                      9   4 7  6

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space

function mergeBinaryTrees(tree1, tree2) {
  // Write your code here.
  if (!tree1 & !tree2) return null;

  let merged = new BinaryTree(
    (tree1 ? tree1.value : 0) + (tree2 ? tree2.value : 0)
  );
  merged.left = mergeBinaryTrees(
    tree1 ? tree1.left : null,
    tree2 ? tree2.left : null
  );
  merged.right = mergeBinaryTrees(
    tree1 ? tree1.right : null,
    tree2 ? tree2.right : null
  );

  return merged;
}

// O(n) time | O(h) space

function mergeBinaryTrees(tree1, tree2) {
  // Write your code here.

  if (!tree1) return tree2;
  if (!tree2) return tree1;

  tree1.value = tree1.value + tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);

  return tree1;
}

//  O(n) time  |  O(h) space
function mergeBinaryTrees(tree1, tree2) {
  if (!tree1) return tree2;

  let stack1 = [tree1];
  let stack2 = [tree2];

  while (stack1.length > 0) {
    let tree1Node = stack1.pop();
    let tree2Node = stack2.pop();

    if (!tree2Node) continue;
    tree1Node.value = tree1Node.value + tree2Node.value;

    if (!tree1Node.left) {
      tree1Node.left = tree2Node.left;
    } else {
      stack1.push(tree1Node.left);
      stack2.push(tree2Node.left);
    }

    if (!tree1Node.right) {
      tree1Node.right = tree2Node.right;
    } else {
      stack1.push(tree1Node.right);
      stack2.push(tree2Node.right);
    }
  }

  return tree1;
}
