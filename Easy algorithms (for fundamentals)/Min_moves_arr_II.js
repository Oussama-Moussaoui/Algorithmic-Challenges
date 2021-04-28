/**
 * Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
 * In one move, you can increment or decrement an element of the array by 1.
 * For more description: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    // Get sum of distances between nums[i] and other elements
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            sum += Math.abs(nums[i] - nums[j]); // Distance (+)
        }
        sums.push(sum);
    }
    
    // Get minimum from sums
    let min = sums[0];
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] < min) min = sums[i];
    }
    
    return min;
};
