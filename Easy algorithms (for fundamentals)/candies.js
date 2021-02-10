var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    
    // Get the greatest (max)
    const greatest = findGreatest(candies);
    
    for (let can of candies) {
        result.push(can + extraCandies >= greatest);
    }
    
    return result;
};

// Helpers
function findGreatest(candies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (i === 0) {max = candies[i]}
    if (candies[i] > max) {max = candies[i]}
  }
  return max;
}
