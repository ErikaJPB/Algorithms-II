//O(n^2) time | O(n) space

function arrayOfProducts(array) {
  // Write your code here.
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
      result[i] = product;
    }
  }
  return result;
}

// O(n) time  | O(n) space
function arrayOfProducts(array) {
  // Write your code here.
  let result = new Array(array.length).fill(1);

  let leftProductSoFar = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] *= leftProductSoFar;
    leftProductSoFar *= array[i];
  }

  let rightProductSoFar = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    result[i] *= rightProductSoFar;
    rightProductSoFar *= array[i];
  }
  return result;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
//[8,40,10,20]
