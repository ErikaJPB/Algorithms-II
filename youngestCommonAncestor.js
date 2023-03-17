//                          A
//                        /   \
//                       B     C
//                      / \   / \
//                     D   E F   G
//                    / \
//                   H   I

// topAncestor = node A
// descendantOne = node E
// descendantTwo = node I

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}
