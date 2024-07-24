// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum / array.length;
}
