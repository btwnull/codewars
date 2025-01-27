// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return [];
  }
  let array = [0, 0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      array[1] += input[i];
    } else {
      array[0] += 1;
    }
  }
  return array;
}
