// function findMaxNumber(arr) {
  // return Math.max(arr);
// }

function findMaxNumber(arr) {
  let max;
  for (let num of arr) {
    if (max === undefined) {
      max = num;
    } else {
      if (num > max) {
        max = num;
      }
    }
  }
  
  return max;
}
module.exports = findMaxNumber;
