// [10,4,2,1,5,17,19,18]

// Output

//                            10
//                           /  \
//                          4    17
//                         / \    \
//                        2   5   19
//                       /        /
//                      1        18

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// O(n^2) time   | O(h) space
function reconstructBst(preOrderTraversalValues) {
  // Write your code here.

  if (preOrderTraversalValues.length === 0) return null;

  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeValue = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    let value = preOrderTraversalValues[i];
    if (value >= currentValue) {
      rightSubtreeValue = i;
      break;
    }
  }

  const leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeValue)
  );
  const rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeValue)
  );

  return new BST(currentValue, leftSubtree, rightSubtree);
}

// O(n) time | O(h) space

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // Write your code here.

  const treeInfo = new TreeInfo(0);
  return reconstructorBstHelper(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructorBstHelper(
  lowerValue,
  upperValue,
  preOrderTraversalValues,
  currentSubtree
) {
  if (currentSubtree.rootIdx === preOrderTraversalValues.length) return null;

  const rootValue = preOrderTraversalValues[currentSubtree.rootIdx];
  if (rootValue < lowerValue || rootValue >= upperValue) return null;

  currentSubtree.rootIdx++;

  const leftSubtree = reconstructorBstHelper(
    lowerValue,
    rootValue,
    preOrderTraversalValues,
    currentSubtree
  );
  const rightSubtree = reconstructorBstHelper(
    rootValue,
    upperValue,
    preOrderTraversalValues,
    currentSubtree
  );

  return new BST(rootValue, leftSubtree, rightSubtree);
}
