//array = [1,2,5,7,10,13,14,15,22]

// output option 1
//                     10
//                    /  \
//                   2    14
//                  / \   / \
//                 1   5  13  15
//                      \      \
//                       7      22

// output option 2

//                     10
//                    /  \
//                   5    15
//                  / \   / \
//                 2   7 13  22
//                /       \
//               1         14

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// O(nlog(n)) time  | O(n) space

function minHeightBst(array) {
  // Write your code here.
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);

  return bst;
}

// O(n) time  | O(n) space
function minHeightBst(array) {
  // Write your code here.
  return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}
