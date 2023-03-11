// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  if (!array.length) {
    return 0;
  }
  return array.reduce((a, b) => a + b) / array.length;
}
