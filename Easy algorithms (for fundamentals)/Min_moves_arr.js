/**  
 * Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.  
 * In one move, you can increment n - 1 elements of the array by 1.  
 * More description: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // FIND MIN
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    
    // Sum up the distances between the min and every element in the array
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] - min;
    }
    
    return sum;
};
