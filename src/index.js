module.exports = function longestConsecutiveLength(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var count=0;
  var sum=1;
  for (let i=0; i<array.length; i++) {
    if (array[i]+1==array[i+1]) {sum+=1;
    } else {
      if (sum>count) {count=sum;}
      sum=1;
    }
  }
  return count;
}
