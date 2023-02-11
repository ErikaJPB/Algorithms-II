//                         10
//                        /  \
//                       5    15
//                      / \   / \
//                     2  5  13 22
//                   /        \
//                   1         14

// Insert -> 12

//                         10
//                        /  \
//                       5    15
//                      / \   / \
//                     2  5  13 22
//                   /       / \
//                   1      12  14

// remove -> 10

//                         12
//                        /  \
//                       5    15
//                      / \   / \
//                     2  5  13 22
//                   /        \
//                   1        14

// contains -> 15 (true)

// O(log(n)) average case, O(n) worst case -> time
// O(log(n)) recursively average case, O(n) worst case -> space | if we resolve this iteratively the space changes to O(1)

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
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

    return this;
  }

  contains(value) {
    // Write your code here.
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  remove(value, parentNode = null) {
    if (this.value === value) {
      if (this.left === null && this.right === null) {
        if (parentNode === null) {
          return null;
        } else if (parentNode.left === this) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else if (this.right === null) {
        if (parentNode === null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (parentNode.left === this) {
          parentNode.left = this.left;
        } else {
          parentNode.right = this.left;
        }
      } else if (this.left === null) {
        if (parentNode === null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else if (parentNode.left === this) {
          parentNode.left = this.right;
        } else {
          parentNode.right = this.right;
        }
      } else {
        let minNode = this.right;
        while (minNode.left !== null) {
          minNode = minNode.left;
        }

        this.value = minNode.value;
        this.right.remove(minNode.value, this);
      }
    } else if (value < this.value && this.left !== null) {
      this.left.remove(value, this);
    } else if (this.right !== null) {
      this.right.remove(value, this);
    }
  }
}
