class UnionFind {
  constructor() {
    this.sets = [];
  }

  // O(1) time | O(1) space
  createSet(value) {
    this.sets.push(new Set([value]));
  }

  // O(n) time | O(n) space
  find(value) {
    for (let set of this.sets) {
      if (set.has(value)) {
        return set.values().next().value;
      }
    }
    return null;
  }

  // O(n) time | O(n) space
  union(valueOne, valueTwo) {
    let setOne = null;
    let setTwo = null;
    for (let set of this.sets) {
      if (set.has(valueOne)) {
        setOne = set;
      }
      if (set.has(valueTwo)) {
        setTwo = set;
      }
    }
    if (setOne === null || setTwo === null || setOne === setTwo) {
      return;
    }

    setTwo.forEach((value) => {
      setOne.add(value);
    });

    this.sets = this.sets.filter((set) => set !== setTwo);
  }
}
