module.exports = function longestConsecutiveLength(array) {
  let count = 0, sum = 1;
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {continue;}
    if (array[i] + 1 === array[i + 1]) {sum += 1;
    } else {
      if (sum > count) {count = sum;}
      sum = 1;
    }
  }
  return count;
}
