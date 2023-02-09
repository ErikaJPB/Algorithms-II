// O(n) time  | O(n) space

function zeroSumSubarray(nums) {
  // Write your code here.

  let sum = 0;
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    if (sum === 0 || set.has(sum)) {
      return true;
    }
    set.add(sum);
  }
  return false;
}

console.log(zeroSumSubarray([-5, -5, 2, 3, -2])); // true
